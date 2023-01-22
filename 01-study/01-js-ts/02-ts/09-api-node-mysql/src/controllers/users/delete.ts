import { models } from "src/models";
import { ExpressRoute } from "src/types/external";
import { REST } from "src/util/rest";

export const deleteUser: ExpressRoute = async (req, res) => {
    const body = req.body as User;

    try {
        const result = await models.userModel.removeAttribute(body.id);
        return REST.success(res, "user deleted", result);
    } catch (err) {
        return REST.systemError(res, "cannot delete an user", err);
    }
};
