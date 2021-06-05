const { resolve, join } = require("path")

module.exports = {
    entry: resolve(__dirname + "/src/index.jsx"),
    output: {
        path: resolve(__dirname + "/dist/"),
        filename: "bundle.js"
    },
    devServer: {
        port: 8080,
        compress: true,
        contentBase: join(__dirname, "./dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                },
                exclude: "/node_modules",
            },
            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
}
