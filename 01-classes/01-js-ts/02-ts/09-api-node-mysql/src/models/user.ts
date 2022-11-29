import { Model, DataTypes, Sequelize } from "sequelize";

export const userModel = (sequelize: Sequelize) => {
    class User extends Model {}
    return User.init(
        {
            name: {
                type: DataTypes.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3, 124],
                        msg: "name length must to be between 3 and 124",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                defaultValue: "",
                validate: { isEmail: { msg: "invalid email address" } },
            },
            age: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    min: { args: [18], msg: "age must to be more that 18" },
                    max: { args: [120], msg: "age must to be less that 120" },
                },
            },
            weight: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                validate: {
                    min: { args: [30], msg: "weight must to be more that 30" },
                    max: {
                        args: [250],
                        msg: "weight must to be less that 250",
                    },
                },
            },
            height: {
                type: DataTypes.FLOAT,
                defaultValue: 0,
                validate: {
                    min: {
                        args: [0.5],
                        msg: "height must to be more that 0.50",
                    },
                    max: {
                        args: [3],
                        msg: "height must to be less that 3",
                    },
                },
            },
            password_hash: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.VIRTUAL,
                allowNull: false,
                validate: {
                    len: {
                        args: [8, 124],
                        msg: "password length must to be between 8 and 124",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "user",
        }
    );
};
