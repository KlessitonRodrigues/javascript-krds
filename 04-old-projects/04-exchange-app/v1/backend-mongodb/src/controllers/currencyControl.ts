import { Request, Response } from 'express'
import axios from 'axios'

import restResponse from '../util/restResponse'
import userModel from '../models/userModel'

const headers = {
    'x-rapidapi-host': process.env.CURRENCY_API_HOST || '',
    'x-rapidapi-key': process.env.CURRENCY_API_KEY || '',
}

const apiUrl = `https://${headers['x-rapidapi-host']}/currency`

class Currency {
    availableCurrencies(req: Request<{ lang?: string }>, res: Response) {
        const language = req.params.lang || 'en'

        axios
            .get(`${apiUrl}/list`, { headers, params: { language } })
            .then(({ data }) =>
                restResponse(res, { success: true, data: Object.keys(data.currencies) })
            )
            .catch((err) =>
                restResponse(res, { success: false, data: "Couldn't get the currencies" })
            )
    }

    async currencyConverter(
        req: Request<{ lang?: string }, {}, TradeTypes.currencyTrade> & { userId?: string },
        res: Response
    ) {
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

            const resData = {
                from: data.base_currency_code,
                to: Object.keys(data.rates)[0],
                amount: data.amount,
                rate: data.rates[params.to].rate,
                result: data.rates[params.to].rate_for_amount,
            }

            const user = await userModel.findByIdAndUpdate(
                req.userId,
                { $push: { history: resData } },
                { new: true }
            )
            if (!user) throw new Error()

            restResponse(res, { success: true, data: { ...resData, history: user.history } })
        } catch (err) {
            restResponse(res, { success: false, msg: "Couldn't make this exchange" })
        }
    }
}

export default new Currency()
