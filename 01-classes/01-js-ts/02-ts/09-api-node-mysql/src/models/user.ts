import { Model, DataTypes, Sequelize } from "sequelize";

export const userModel = (sequelize: Sequelize) => {
    class User extends Model {}
    return User.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            age: DataTypes.INTEGER,
            weight: DataTypes.INTEGER,
            height: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: "user",
        }
    );
};
