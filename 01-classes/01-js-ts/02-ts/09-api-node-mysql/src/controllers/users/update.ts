import { Request, Response } from "express";
import { models } from "../../models";
import { REST } from "../../util/rest";

export const updateUser = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        const result = await models.userModel.update({ id: body.id }, body);
        return REST.success(res, "user updated", result);
    } catch (err) {
        return REST.systemError(res, "cannot update an user", err);
    }
};
