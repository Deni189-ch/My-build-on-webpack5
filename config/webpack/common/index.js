const paths = require('../../paths/paths')
const importAlias = require('../../paths/alias')

const commonRules = require('./commonRules.js')
const commonPlugins = require('./commonPlugins.js')

module.exports = {
  output: {
    path: paths.build,
    filename: 'js/[name].[hash:8].bundle.js',

    assetModuleFilename: 'images/[name].[hash:8][ext][query]',
    publicPath: '/',

    clean: true,
  },

  module: {
    rules: commonRules.rules
  },

  plugins: commonPlugins.plugins,

  resolve: {
    alias: importAlias,
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', ".css", ".scss"]
  }
};

