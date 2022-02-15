import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import restResponse from '../util/restResponse'

const secret = process.env.SECRET_KEY || ''

export default async function authToken(
    req: Request & { userId?: string },
    res: Response,
    next: NextFunction
) {
    const token = req.headers['x-access-token'] as string

    if (!token) return restResponse(res, { success: false, msg: "Token isn't provider!" })

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return restResponse(res, { success: false, msg: 'Unauthorized!' })
        req.userId = decoded?.id
        next()
    })
}
