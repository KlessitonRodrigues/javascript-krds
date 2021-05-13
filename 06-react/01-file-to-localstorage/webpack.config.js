const webpack = require("webpack")
const pathResolve = require("path").resolve

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: pathResolve(__dirname, "public"),
        file: "./app.js"
    },
    devServer: {
        port: 8080,
        contentBase: "./public"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            modules: pathResolve(__dirname, "node_modules")
        }
    },
    modules: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader",
                exclude: "/node_modules",
                query:{
                    presets: ["react"],
                }
            },
            {
                test: /\.woff|\.woff2|\.ttf|\.eot|\.svg*.*$/,
                loader: "file"
            }
        ]
    }
}