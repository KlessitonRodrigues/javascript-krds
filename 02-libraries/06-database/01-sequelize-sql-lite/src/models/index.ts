import sequelize from "../config/database";

import carModel, { Car } from "./cars";

export default {
  carModel: carModel(sequelize),
};

export type { Car };
