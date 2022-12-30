const paths = require('../paths')

const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const Dotenv = require('dotenv-webpack')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
    plugins: ['@babel/plugin-transform-runtime']
  }
}

module.exports = {
  entry: `${paths.src}/index.js`,
  output: {
    path: paths.build,
    filename: 'js/[name].[hash].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/',
    clean: true,
    // crossOriginLoading: 'anonymous',
    // module: true,
    // environment: {
    //   arrowFunction: true,
    //   bigIntLiteral: false,
    //   const: true,
    //   destructuring: true,
    //   dynamicImport: false,
    //   forOf: true
    // }
  },
  module: {
    rules: [
      // JavaScript / React / TypeScript
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: [babelLoader]
      },
      // MD
      {
        test: /\.md$/i,
        use: ['html-loader', 'markdown-loader']
      },
      // static files
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
        // options: {
        //   publicPath: "../",
        //   name: "[path][name].[ext]",
        //   context: path.resolve(__dirname, "src/assets"),
        //   emitFile: false,
        // },
      },
      // static files
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    // new webpack.ProgressPlugin(),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: `${paths.public}/assets` падает прилка
    //     }
    //   ]
    // }),

    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html',
      // templateParameters: {
      //   analytics: 'Google Analytics ID',
      //   author: 'Igor Agapov',
      //   publishedDate: '2021-02-27',
      //   description:
      //     'Full Webpack 5 Boilerplate for JavaScript, React & TypeScript projects',
      //   keywords:
      //     'webpack, webpack5, boilerplate, template, max, config, bundler, bundle, javascript, react, reactjs, react.js, typescript, project, app',
      //   title: 'Webpack5 Max',
      //   url: 'https://example.com'
      // }
    }),

    new webpack.ProvidePlugin({
      React: 'react'
    }),

    // new Dotenv({
    //   path: './config/.env'
    // })
  ],
  resolve: {
    alias: {
      '@components': `${paths.src}/components`,
      '@images': `${paths.src}/assets/images`
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  }
};