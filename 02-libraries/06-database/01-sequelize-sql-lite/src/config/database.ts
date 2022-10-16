import { Sequelize } from "sequelize";

export default async () => {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./storage.sqlite",
  });

  return sequelize;
};
