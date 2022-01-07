import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import restResponse from '../util/restResponse'

const secret = process.env.SECRET_KEY || ''

class Authetication {
    createAuth(req: Request<{}, {}, UserTypes.User>, res: Response) {
        const { email, password } = req.body

        if (!(email && password))
            return restResponse(res, { success: false, msg: 'invalid credentials' })

        const encryptPass = bcrypt.hashSync(req.body.password, 4)

        // SAVE EMAIL, ENCRYPTPASS
    }

    async autheticate(req: Request<{}, {}, UserTypes.User>, res: Response) {
        const { body } = req

        if (!(body.email && body.password))
            return restResponse(res, { success: false, msg: 'invalid credentials' })

        try {
            // GET USER

            const user = userQuery.rows[0]

            if (!user) return restResponse(res, { success: false, msg: 'user not founded' })

            const isValidPassord = bcrypt.compareSync(body.password, user.client_password)

            if (!isValidPassord)
                return restResponse(res, { success: false, msg: 'invalid password' })

            const token = jwt.sign({ id: user.client_id }, secret, { expiresIn: 3600 })

            // SEND TOKEN
        } catch (err) {
            console.log(err)
        }
    }
}

export default new Authetication()
