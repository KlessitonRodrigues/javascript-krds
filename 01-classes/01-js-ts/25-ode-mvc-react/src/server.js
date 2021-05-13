const express = require("express")
const routes = require("./routes")
const pathResolve = require("path").resolve

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.set("views", pathResolve(__dirname, "views"))
app.set("view engine", "ejs")

app.listen(3000, () => console.log("running..."))