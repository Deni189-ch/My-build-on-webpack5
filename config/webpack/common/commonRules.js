const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
    plugins: ['@babel/plugin-transform-runtime']
  }
}

const isProd = process.env.NODE_ENV === 'production'

const cssLoader = [
  isProd ? MiniCssExtractPlugin.loader : {loader: 'style-loader'},
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
];

module.exports = {
  rules: [
    // JavaScript / React / TypeScript
    {
      test: /\.(js|jsx|ts|tsx)$/i,
      exclude: /node_modules/,
      use: [babelLoader, { loader: 'ts-loader', options: { compilerOptions: { noEmit: false, } } }]
    },
    // styles dev/prod
    {
      test: /\.(c|sa|sc)ss$/i,
      use: cssLoader,
      sideEffects: true
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
    },
    // fonts format
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      type: 'asset/resource'
    },
  ]
}