const paths = require('../paths')

const { merge } = require('webpack-merge')
const common = require('./common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const cssLoader = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {importLoaders: 1}
  },
  // 'sass-loader'
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [["postcss-preset-env"]],
      },
    },
  },
];

module.exports = merge(common, {
  mode: 'production',
  // entry: {
  //   index: {
  //     import: `${paths.src}/index.js`,
  //     dependOn: ['react', 'helpers']
  //   },
  //   react: ['react', 'react-dom', 'prop-types'],
  //   helpers: ['immer', 'nanoid']
  // },
  // devtool: false, не сохраняет ли дев настройку посмотреть
  // output: {
  //   filename: 'js/[name].[hash].bundle.js',
  //   publicPath: './'
  // },
  module: {
    rules: [
      {
        test: /\.css$/i, // test: /\.(c|sa|sc)ss$/i,
        use: cssLoader
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].css'
    }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg|webp|ico)$/i
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  // performance: {
  //   hints: 'warning',
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000
  // }
})
