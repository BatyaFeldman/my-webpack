const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    //add content hash to prevent browser from caching the main.js. the hash will change everytime something in main.js changes
    filename: "[name].[contenthash].bundle.js",
  },
  plugins: [new CleanWebpackPlugin()],
});
