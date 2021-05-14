const bodyParser = require("body-parser")
const express = require("express")
const routes = require("./routes")

const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () =>
    console.log(`Running... port: ${port}`)
)

routes(server)