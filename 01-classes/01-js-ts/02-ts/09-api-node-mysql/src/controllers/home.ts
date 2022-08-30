import { Request, Response } from "express";
import { REST } from "../util/rest";

class HomeController {
    getList(req: Request, res: Response<RestRes>) {
        return REST.success(res, "list loaded successfully", { res: true });
    }
}

export default new HomeController();
