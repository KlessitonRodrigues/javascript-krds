const express = require("express")
const homeController = require("./src/controllers/homeController")

const route = express.Router()

// home routes
route.get("/", homeController.homePage)

// about routes
route.get("/about")

module.exports = route