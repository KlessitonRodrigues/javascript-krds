import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { pgClient } from '..'
import restResponse from '../util/restResponse'
import mapDBHistory from '../util/mapDBHistory'

const secret = process.env.SECRET_KEY || ''

class Authetication {
    createAuth(req: Request<{}, {}, UserTypes.User>, res: Response) {
        const { email, password } = req.body

        if (!(email && password))
            return restResponse(res, { success: false, msg: 'invalid credentials' })

        const encryptPass = bcrypt.hashSync(req.body.password, 4)

        pgClient
            .query(
                `INSERT INTO CLIENTS ( CLIENT_EMAIL, CLIENT_PASSWORD ) VALUES ( '${email}', '${encryptPass}' );`
            )
            .then(() => restResponse(res, { success: true, data: email }))
            .catch(() => restResponse(res, { success: false, msg: 'user already exists' }))
    }

    async autheticate(req: Request<{}, {}, UserTypes.User>, res: Response) {
        const { body } = req

        if (!(body.email && body.password))
            return restResponse(res, { success: false, msg: 'invalid credentials' })

        try {
            const userQuery = await pgClient.query<DBTypes.Client>(
                `SELECT * FROM CLIENTS WHERE CLIENT_EMAIL = '${body.email}'`
            )

            const user = userQuery.rows[0]

            if (!user) return restResponse(res, { success: false, msg: 'user not founded' })

            const isValidPassord = bcrypt.compareSync(body.password, user.client_password)

            if (!isValidPassord)
                return restResponse(res, { success: false, msg: 'invalid password' })

            const token = jwt.sign({ id: user.client_id }, secret, { expiresIn: 3600 })

            const historyQuery = await pgClient.query<DBTypes.History>(
                `SELECT * FROM HISTORIES WHERE CLIENT_ID = '${user.client_id}'`
            )

            const history = mapDBHistory(historyQuery.rows)

            return restResponse(res, {
                success: true,
                data: {
                    email: user.client_email,
                    accessToken: token,
                    history,
                },
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export default new Authetication()
