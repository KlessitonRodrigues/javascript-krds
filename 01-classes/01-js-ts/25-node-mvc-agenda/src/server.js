const express = require("express")
const { resolve } = require("path")
const helmet = require("helmet")
const mongoose = require("mongoose")
const routes = require("./routes")

// Express
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static(resolve(__dirname, "../public")))
app.set("views", resolve(__dirname, "views"))
app.set("view engine", "ejs")
app.use(routes)

app.listen(3000, () => console.log("OK... http://localhost:3000"))