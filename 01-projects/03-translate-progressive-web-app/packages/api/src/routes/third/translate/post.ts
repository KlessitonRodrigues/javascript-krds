import axios from "axios";
import { Request, Response } from "express";
import nodeUrl from "url";

import restResponse from "../../../util/restResponse";
import { url, headers } from "./headers";

export default function (req: Request, res: Response) {
  const params = new nodeUrl.URLSearchParams(req.body);

  axios
    .post(url, params.toString(), { headers })
    .then(({ data }) =>
      restResponse(res, { success: true, data: { result: data.result } })
    )
    .catch((err) => restResponse(res, { success: false, data: err }));
}
