const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("");

sequelize
  .authenticate()
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Error:", err));
