const bodyParser = require("body-parser")
const express = require("express")
const queryParser = require("express-query-int")
const routes = require("./routes")
const allowCors = require("./cors")

const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () =>
    console.log(`Running... port: ${port}`)
)

routes(server)