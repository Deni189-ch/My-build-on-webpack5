const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
    plugins: ['@babel/plugin-transform-runtime']
  }
}

module.exports = {
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
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      type: 'asset/resource'
    },
  ]
}