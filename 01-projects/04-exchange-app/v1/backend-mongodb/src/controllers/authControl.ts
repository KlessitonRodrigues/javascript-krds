import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import userModel from '../models/userModel'
import restResponse from '../util/restResponse'

const secret = process.env.SECRET_KEY || ''

class Authetication {
    createAuth(req: Request<{}, {}, UserTypes.User>, res: Response) {
        const { email, password } = req.body

        if (!(email && password))
            return restResponse(res, { success: false, msg: 'invalid credentials' })

        const encryptPass = bcrypt.hashSync(req.body.password, 4)

        userModel
            .create({ email, password: encryptPass })
            .then((data) => restResponse(res, { success: true, data: data.email }))
            .catch(() => restResponse(res, { success: false, msg: 'user already exists' }))
    }

    async autheticate(req: Request<{}, {}, UserTypes.User>, res: Response) {
        const { body } = req

        if (!(body.email && body.password))
            return restResponse(res, { success: false, msg: 'invalid credentials' })

        const user = await userModel.findOne({ email: body.email })

        if (!user) return restResponse(res, { success: false, msg: 'user not founded' })

        const isValidPassord = bcrypt.compareSync(body.password, user.password)

        if (!isValidPassord) return restResponse(res, { success: false, msg: 'invalid password' })

        const token = jwt.sign({ id: user.id }, secret, { expiresIn: 3600 })

        return restResponse(res, {
            success: true,
            data: {
                email: user.email,
                accessToken: token,
                history: user.history,
            },
        })
    }
}

export default new Authetication()
