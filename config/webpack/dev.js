const webpack = require('webpack')

const paths = require('../paths/paths.js')
const { merge } = require('webpack-merge')

const common = require('./common/index')

const cssLoader = [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options: {importLoaders: 1}
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [["postcss-preset-env"]],
      },
    },
  },
  {
    loader: 'sass-loader'
  },
]

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: cssLoader,
       // sideEffects: true //  ?
      },
    ]
  },
  devServer: {
    compress: true,
    static: paths.build,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})