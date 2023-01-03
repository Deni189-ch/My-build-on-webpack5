const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("../../paths/paths");
const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.public}/assets`,
          to: 'public/[name].[hash:8][ext][query]',
        }
      ]
    }),

    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html',
    }),

    new webpack.ProvidePlugin({
      React: 'react'
    }),

    new Dotenv({
      path: paths.env,
    })
  ]
}