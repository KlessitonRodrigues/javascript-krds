import { Response } from 'express'

export type ResData = {
  success: boolean
  msg?: string
  data?: any
}

export function restResponse(res: Response, data: ResData, status = 200) {
  res.status(status).send(data)
}
