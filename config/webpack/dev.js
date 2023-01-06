const paths = require('../paths/paths.js')
const { merge } = require('webpack-merge')

const common = require('./common/index')

module.exports = merge(common, {
  mode: 'development',

  entry: `${paths.src}/index.tsx`,

  devtool: 'eval-cheap-source-map',

  optimization: {
    usedExports: true,
  },

  devServer: {
    compress: true,
    static: paths.build,
    historyApiFallback: true,
    hot: true,
    port: 3001,
  },
})