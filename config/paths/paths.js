const paths = require('path')

module.exports = {
  public: paths.resolve(__dirname, '../../public'),
  build: paths.resolve(__dirname, '../../build'),
  env: paths.resolve(__dirname, '../env/.env'),
  src: paths.resolve(__dirname, '../../src'),
}