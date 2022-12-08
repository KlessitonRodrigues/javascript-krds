const express = require("express");
const auth = require("./routes/auth");

const routes = express.Router();

routes.get("/auth", auth.get);
routes.post("/auth", auth.post);

module.exports = (app) => {
  app.use(routes);
};
