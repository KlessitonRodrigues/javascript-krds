const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send(`<h1>Hello</h1>`)
})

// params
// http://localhost:3000/params/:testParam1/:testParam2
app.get("/params/:param1?/:param2?", (req, res) => {
    res.send(req.params)
})

// query
// http://localhost:3000/query/?test=lorem&test2=ipsum
app.get("/query", (req, res) => {
    res.send(req.query)
})

// body
// http://localhost:3000/body
app.get("/body", (req, res) => {
    res.send(form)
})

app.post("/body", (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => console.log("running..."))

const form = `
<form method="POST">
    name
    <input type="text" name="nameField">
    <button type="submit">send</button>
</form>
`