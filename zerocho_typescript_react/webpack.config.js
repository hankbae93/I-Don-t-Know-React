const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval", // hidden-source-map
  resolve: {
    // 확장자
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
