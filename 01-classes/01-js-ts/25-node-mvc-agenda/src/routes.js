const express = require("express")

const homeController = require("./controllers/homeController")
const loginController = require("./controllers/loginController")

const route = express.Router()

// home routes
route.get("/", homeController.index)

// login routes
route.get("/login", loginController.index)

module.exports = route