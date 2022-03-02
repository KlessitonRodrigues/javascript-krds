import { Request, Response } from 'express'

import { restResponse } from '../../../util/restResponse'

type Interlace = {
  intervalA: number[]
  intervalB: number[]
}

export default function (req: Request, res: Response) {
  const { intervalA = [], intervalB = [] } = req.body as Interlace

  if (intervalA.length !== 2 || intervalB.length !== 2) {
    return restResponse(res, {
      success: false,
      msg: 'must be between two arrays'
    })
  }

  const [a1, a2] = intervalA
  const [b1, b2] = intervalB

  const isInterlaced =
    (b1 >= a1 && b1 <= a2 && b2 > a2) || (b2 >= a1 && b2 <= a2 && b1 < a1)

  restResponse(res, {
    success: true,
    data: { isInterlaced }
  })
}
