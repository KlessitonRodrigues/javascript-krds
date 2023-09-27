const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
// const webpack = require('webpack');
// require('dotenv').config({ path: './client.env' });
// const compileEnv = new webpack.EnvironmentPlugin(['ENV_VARS']);
//"/home/krds/Dev/Git/westpoint/talentid-local/infra/src/utils/PDFToText"

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  target: "node",
  output: {
    filename: "libJS.js",
    path: path.resolve(
      "/home/krds/Dev/Git/westpoint/talentid-local/infra/src/utils/pdf"
    ),
    // clean: true,
    library: {
      // name: "pdfreader",
      type: "commonjs",
      export: "default",
    },
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".ts", ".js", "..."],
    plugins: [],
  },
  // plugins: [compileEnv],
  plugins: [new NodePolyfillPlugin()],
};
