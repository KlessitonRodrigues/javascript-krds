import { Response } from "express";

class RESTResponse {
    success(res: Response, msg: string, data: any) {
        res.status(200).json({
            success: true,
            message: msg,
            data: data,
        });
    }

    notAutheticated(res: Response, msg: string, data?: any) {
        res.status(401).json({
            success: false,
            message: msg,
            data: data,
        });
    }
}

export const REST = new RESTResponse();
