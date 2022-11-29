"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.createTable("transports", {
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
            color: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            brandId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            numberOfWhells: {
                type: Sequelize.INTEGER,
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
