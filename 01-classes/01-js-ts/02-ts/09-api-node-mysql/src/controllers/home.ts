import { Request, Response } from "express";

class HomeController {
    index(req: Request, res: Response<RestRes>) {
        return res.json({
            success: true,
            msg: "testing response data",
            data: "test",
        });
    }
}

export default new HomeController();
