var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, options) => {
  const config = {
    entry: {
      index: "./src/index.tsx",
    },
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].[id].js",
      path: path.resolve(__dirname, "public"),
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
          },
          styles: {
            name: "styles",
            test: /\.(css)$/,
            chunks: "all",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: [miniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.()$/, // font등의 파일 확장자 regExp
          exclude: /node_modules/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./dist",
            },
          },
        },
        {
          test: /\.()$/, // 이미지 확장자 regExp
          exclude: /node_modules/,
          use: {
            loader: "url-loader",
            options: {
              name: "[name].[ext]?[hash]", // 파일명 또는 파일해쉬값
              publicPath: "./dist/", // 빌드 후 limit가 넘는 파일 위치
              limit: 10000, // 10000byte 제한
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new htmlWebpackPlugin({
        title: "Apple",
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        template: "./src/index.html",
      }),
      new miniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].[id].css",
      }),
    ],
  };

  // 배포
  if (options.mode === "production") {
    config.mode = "production";
    config.plugins = [
      ...config.plugins,
      ...[
        new uglifyjsWebpackPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
      ],
    ];
    // 개발
  } else {
    config.mode = "development";
    config.devServer = {
      port: 3000,
      contentBase: path.resolve(__dirname, "public"),
      compress: true,
      watchContentBase: true,
    };
  }

  return config;
};
