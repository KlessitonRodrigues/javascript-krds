const fs = require("fs").promises
const pathResolve = require("path").resolve

async function readDir(rootDir) {
    rootDir = rootDir || pathResolve(__dirname)
    // reading files
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (let file of files) {
        // rootdir + file directory
        const fileFullPath = pathResolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        if (stats.isDirectory()) {
            readDir(fileFullPath)
            continue
        }

        if (!/.txt/g.test(fileFullPath)) continue

        console.log(fileFullPath)
    }
}

readDir("/home/krs/Git/PC-Projects/01-classes/01-js-ts/21-node-fs")