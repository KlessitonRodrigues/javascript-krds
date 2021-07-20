const express = require("express")
const { resolve } = require("path")
const routes = require("./routes")
const cookieParser = require("cookie-parser")

const app = express()

app.set("views", resolve(__dirname, "views"))
app.set("view engine", "ejs")

// middlewares
require("./middlewares/cookieParse")(app)
require("./middlewares/csurf")(app)
// require("./middlewares/helmet")(app)

app.use(express.urlencoded({ extended: false }))
app.use(express.static(resolve(__dirname, "../public")))
app.use(routes)

app.listen(3000, () => console.log("OK... http://localhost:3000"))