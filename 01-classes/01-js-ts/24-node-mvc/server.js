const express = require("express")
const pathResolve = require("path").resolve
const helmet = require("helmet")

const routes = require("./routes")

// Express
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static(pathResolve(__dirname, "public")))
app.set("views", pathResolve(__dirname, "src", "views"))
app.set("view engine", "ejs")
app.use(routes)

app.listen(3000, () => console.log("OK... http://localhost:3000"))