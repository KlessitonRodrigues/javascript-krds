const fsWriteFile = require("fs").writeFileSync

module.exports = (path, text) =>
    fsWriteFile(path, text, { flag: "w", encoding: "utf-8" })