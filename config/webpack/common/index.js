const paths = require('../../paths/paths')

const commonPlugins = require('./commonPlugins.js')
const commonRules = require('./commonRules.js')
const importAlias = require('../../paths/alias')

module.exports = {
  entry: `${paths.src}/index.js`,

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
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  }
};

