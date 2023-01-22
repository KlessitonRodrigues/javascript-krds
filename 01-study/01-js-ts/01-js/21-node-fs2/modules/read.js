const fsReadFile = require("fs").promises.readFile

module.exports = path => fsReadFile(path, "utf-8")