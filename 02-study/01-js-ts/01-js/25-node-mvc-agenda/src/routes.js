const express = require("express")

const homeController = require("./controllers/homeController")
const loginController = require("./controllers/loginController")

const routes = express.Router()

// home routes
routes.get("/", homeController.index)

// login routes
routes.get("/login", loginController.index)

module.exports = app => app.use(routes)