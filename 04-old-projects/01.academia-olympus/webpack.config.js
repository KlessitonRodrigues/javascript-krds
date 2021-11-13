const { resolve } = require("path");

module.exports = {
  entry: resolve(__dirname, "src", "build", "index.jsx"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        exclude: "/node_modules/",
      },
      {
        test: /\.jpg$|\.png$|\.gif$/,
        use: ["file-loader?name=img/[hash].[ext]"],
      },
      {
        test: /\.ttf$/,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        use: "url-loader",
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  /*optimization: {
    splitChunks: {
      chunks: "all",
    }, 
  },*/
  devServer: {
    host: "192.168.0.109",
    port: 8080,
    disableHostCheck: true,
    contentBase: resolve(__dirname, "public"),
  },
};
