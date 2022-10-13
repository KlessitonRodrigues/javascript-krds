import { Model, DataTypes, Sequelize } from "sequelize";

export interface Car {
  id?: number;
  name: string;
  brand: string;
  weight: number;
  releaseDate: Date;
  stillInProduction: boolean;
}

export default (sequelize: Sequelize) => {
  const Cars = sequelize.define<Model<Car>>("Cars", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: { type: DataTypes.STRING },
    weight: { type: DataTypes.NUMBER },
    releaseDate: { type: DataTypes.DATE },
    stillInProduction: { type: DataTypes.BOOLEAN },
  });

  return Cars;
};
