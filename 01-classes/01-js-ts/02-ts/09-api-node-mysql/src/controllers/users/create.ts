import { Request, Response } from "express";
import { models } from "../../models";
import { REST } from "../../util/rest";

export const createUser = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        const result = await models.userModel.create(body);
        return REST.success(res, "user created", result);
    } catch (err) {
        return REST.systemError(res, "cannot create an user", err);
    }
};
