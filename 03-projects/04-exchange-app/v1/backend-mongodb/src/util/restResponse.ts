import { Response } from 'express'

export type RestResponse = {
    success: boolean
    msg?: string
    data?: any
}

export default (res: Response, resData?: RestResponse, status = 200) =>
    res.status(status).json(resData)
