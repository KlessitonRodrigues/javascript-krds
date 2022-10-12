import { Sequelize, Model, DataTypes, Dialect } from "sequelize";

export interface Car {
  name: string;
  brand: string;
  weight: number;
  releaseDate: Date;
  stillInProduction: boolean;
}

const sequelize = new Sequelize({
  host: "localhost",
  database: "sql_api",
  password: "12345",
  port: 3306,
  username: "dev_user",
  dialect: "mariadb",
});

const Cars = sequelize.define<Model<Car>>("Cars", {
  name: DataTypes.STRING,
  brand: DataTypes.STRING,
  weight: DataTypes.NUMBER,
  releaseDate: DataTypes.DATE,
  stillInProduction: DataTypes.BOOLEAN,
});

export default Cars;
