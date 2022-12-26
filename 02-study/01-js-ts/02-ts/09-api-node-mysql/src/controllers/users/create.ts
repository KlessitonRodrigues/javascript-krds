import { models } from "src/models";
import { ExpressRoute } from "src/types/external";
import { REST } from "src/util/rest";

export const createUser: ExpressRoute = async (req, res) => {
    const body = req.body as User;

    try {
        const result = await models.userModel.create(body);
        return REST.success(res, "user created", result);
    } catch (err) {
        // @ts-ignore
        return REST.badRequest(res, "cannot create an user", err);
    }
};
