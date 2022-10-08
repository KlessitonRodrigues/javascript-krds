import { Response } from "express";

export type ResData = {
  success: boolean;
  msg?: string;
  data: any;
};

export default function (res: Response, resData?: ResData, status = 200) {
  res.status(status).send(resData);
}
