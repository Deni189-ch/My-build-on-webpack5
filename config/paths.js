const paths = require('path')

module.exports = {
  public: paths.resolve(__dirname, '../public'),
  src: paths.resolve(__dirname, '../src'),
  build: paths.resolve(__dirname, '../build')
}