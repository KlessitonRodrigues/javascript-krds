import { userModel } from "./user";
import sequelize from "../config/sequelize";

export const models = {
    userModel: userModel(sequelize),
};
