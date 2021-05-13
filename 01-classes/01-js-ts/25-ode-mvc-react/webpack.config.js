const pathResolve = require("path").resolve

module.exports = {
    mode: "development",
    entry: "./frontend/index.js",
    output: {
        path: pathResolve(__dirname, "public", "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }

        }, {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }
        ]
    },
    devtool: "source-map"
}