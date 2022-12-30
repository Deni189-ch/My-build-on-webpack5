const paths = require('../paths')

// const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./common')

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
]

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'eval-cheap-source-map', что делает??
  module: {
    rules: [
      // CSS,
      {
        // test: /\.(c|sa|sc)ss$/i,
        test: /\.css$/i,
        use: cssLoader,
        sideEffects: true // что бы три шейкинг не выкинул глобальные стили
      },
    ]
  },
  devServer: {
    compress: true,
    static: paths.build, // где создадим сборку
    // historyApiFallback: true,
    hot: true, // перезагрузка стр при внесении изменений в код (авто)?
    // open: true,
    port: 3000,
    // clientLogLevel: 'silent'
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()]
})