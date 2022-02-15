import { Request, Response } from 'express'
import axios from 'axios'

import restResponse from '../util/restResponse'
import { pgClient } from '..'
import toDBHistory from '../util/toDBHistory'
import mapDBHistory from '../util/mapDBHistory'

type RequestWithIDAndLang = Request<{ lang?: string }, {}, TradeTypes.currencyTrade> & {
    userId?: string
}

const headers = {
    'x-rapidapi-host': process.env.CURRENCY_API_HOST || '',
    'x-rapidapi-key': process.env.CURRENCY_API_KEY || '',
}

const apiUrl = `https://${headers['x-rapidapi-host']}/currency`

class Currency {
    availableCurrencies(req: RequestWithIDAndLang, res: Response) {
        const language = req.params.lang || 'en'

        axios
            .get(`${apiUrl}/list`, { headers, params: { language } })
            .then(({ data }) =>
                restResponse(res, { success: true, data: Object.keys(data.currencies) })
            )
            .catch(() => restResponse(res, { success: false, data: "Couldn't get the currencies" }))
    }

    async currencyConverter(req: RequestWithIDAndLang, res: Response) {
        const params = {
            language: req.params.lang || 'en',
            from: req.body.from,
            amount: req.body.amount,
            to: req.body.to,
        }

        if (!(params.from && params.to && params.amount)) {
            return restResponse(res, { success: false, msg: 'request keys are: from, to, amount' })
        }

        try {
            const { data, status } = await axios.get<CurencyAPI.Exchange>(`${apiUrl}/convert`, {
                headers,
                params,
            })

            if (status !== 200) throw new Error()

            const resData: UserTypes.UserHistory = {
                from: data.base_currency_code,
                to: Object.keys(data.rates)[0],
                amount: data.amount,
                rate: data.rates[params.to].rate as string,
                result: data.rates[params.to].rate_for_amount as string,
                createdAt: new Date().toISOString(),
            }

            const historyWithId = { ...toDBHistory(resData), client_id: req.userId }
            const historyQuery = `
            INSERT INTO HISTORIES (
                HISTORY_FROM,
                HISTORY_TO,
                HISTORY_AMOUNT,
                HISTORY_RESULT,
                HISTORY_RATE,
                HISTORY_CREATEDAT,
                CLIENT_ID
            ) VALUES (
                '${historyWithId.history_from}',
                '${historyWithId.history_to}',
                '${historyWithId.history_amount}',
                '${historyWithId.history_result}',
                '${historyWithId.history_rate}',
                '${historyWithId.history_createdat}',
                ${historyWithId.client_id}
            );`

            await pgClient.query(historyQuery)

            const historyOfUser = await pgClient.query<DBTypes.History>(
                `SELECT * FROM HISTORIES WHERE CLIENT_ID = '${req.userId}'`
            )

            restResponse(res, {
                success: true,
                data: { ...resData, history: mapDBHistory(historyOfUser.rows) },
            })
        } catch (err) {
            restResponse(res, { success: false, msg: "Couldn't make this exchange" })
        }
    }
}

export default new Currency()
