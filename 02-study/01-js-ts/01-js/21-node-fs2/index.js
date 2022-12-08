const pathResolve = require("path").resolve
const read = require("./modules/read")
const write = require("./modules/write")
const jsonPath = pathResolve(__dirname, "data", "data.json")

const obj = [
    { name: "lorem", lastName: "ipsum" },
    { name: "lorem", lastName: "ipsum" },
    { name: "lorem", lastName: "ipsum" },
    { name: "lorem", lastName: "ipsum" },
]

// write(jsonPath, JSON.stringify(obj, {}, 2))

read(jsonPath)
    .then(resp => {
        console.log(JSON.parse(resp));
    })