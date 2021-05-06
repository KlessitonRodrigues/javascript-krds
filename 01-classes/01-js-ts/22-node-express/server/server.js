const express = require("express")
const app = express()

app.get("/", (resquest, response) => {
    response.send("Hello")
})

app.get("/about", (req, res) => {
    res.send("<h1> about us </h1>")
})

app.listen(3000, () =>
    console.log("running... http://localhost:3000/"))