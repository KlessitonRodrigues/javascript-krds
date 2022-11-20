import { Request, Response } from "express";
import { models } from "../../models";
import { REST } from "../../util/rest";

export const deleteUser = async (req: Request, res: Response) => {
    const body = req.body as User;

    try {
        const result = await models.userModel.removeAttribute(body.id);
        return REST.success(res, "user deleted", result);
    } catch (err) {
        return REST.systemError(res, "cannot delete an user", err);
    }
};
