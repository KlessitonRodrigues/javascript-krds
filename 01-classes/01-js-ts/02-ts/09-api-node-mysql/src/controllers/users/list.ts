import { models } from "src/models";
import { ExpressRoute } from "src/types/external";
import { REST } from "src/util/rest";

export const listUsers: ExpressRoute = async (req, res) => {
    try {
        const result = await models.userModel.findAll();
        return REST.success(res, "list of users", result);
    } catch (err) {
        return REST.systemError(res, "cannot list users", err);
    }
};
