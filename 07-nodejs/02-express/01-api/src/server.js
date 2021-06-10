const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(3000,
    () => console.log("OK... localhost:3000"))

require("./controllers/authController")(app)