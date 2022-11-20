"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            weight: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            height: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                defaultValue: Sequelize.DATETIME,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                defaultValue: Sequelize.DATETIME,
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
