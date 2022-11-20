import { Sequelize } from "sequelize";
import { databaseConfig } from "./database";

const sequelize = new Sequelize({
    dialect: "mariadb",
    ...databaseConfig.development,
});

export default sequelize;
