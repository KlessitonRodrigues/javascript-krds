import { Sequelize } from "sequelize";
import carModel, { Car } from "./CarModel";

export default (sequelize: Sequelize) => {
  return {
    cars: carModel(sequelize),
  };
};

export type { Car };
