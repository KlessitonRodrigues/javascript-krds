const express = require("express")
const { resolve } = require("path")
const cookieParser = require("./middlewares/cookieParser")
const csurf = require("./middlewares/csurf")
const helmet = require("./middlewares/helmet")
const routes = require("./routes")

const app = express()

// config
app.set("views", resolve(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static(resolve(__dirname, "../public")))

// middlewares
cookieParser(app)
csurf(app)
// helmet(app)
routes(app)

app.listen(3000, () => console.log("OK... http://localhost:3000"))