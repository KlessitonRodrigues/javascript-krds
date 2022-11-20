import { Request, Response } from "express";
import { models } from "../../models";
import { REST } from "../../util/rest";

export const listUsers = async (req: Request, res: Response) => {
    try {
        const result = await models.userModel.findAll();
        return REST.success(res, "user list", result);
    } catch (err) {
        return REST.systemError(res, "cannot list users", err);
    }
};
