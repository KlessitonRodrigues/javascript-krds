import { Request, Response } from 'express'

import { restResponse } from '../../../util/restResponse'

type lists = {
  classN: number[]
  classS: string[]
}

export default function (req: Request, res: Response) {
  const { classN = [], classS = [] } = req.body as lists

  if (classN.length <= 1 || classS.length <= 1) {
    return restResponse(res, {
      success: false,
      msg: 'needs two or more values to compare'
    })
  }

  const data: lists = {
    classN: classN.sort((a, b) => a - b),
    classS: classS
      .map((str) => str.toLocaleLowerCase())
      .sort((a, b) => (a < b ? -1 : 1))
  }

  restResponse(res, { success: true, data })
}
