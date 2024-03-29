const express = require("express")

const homeController = require("./controllers/homeController")
const formController = require("./controllers/formController")

const route = express.Router()

// home routes
route.get("/", homeController.homePage)

// form routes
route.get("/form", formController.formPage)
route.post("/form", formController.formPost)

module.exports = route