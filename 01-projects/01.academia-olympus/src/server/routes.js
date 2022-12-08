const express = require("express");
const auth = require("./routes/auth");
const manager = require("./routes/manager");

const routes = express.Router();

// AUTH
routes.post("/auth", auth.post);

// MANAGER
routes.post("/manager", manager.post);

module.exports = (app) => app.use(routes);
