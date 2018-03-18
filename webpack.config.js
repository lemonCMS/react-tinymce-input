module.exports = {
  mode: 'development',
  entry: [
    './examples/Tiny.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets',
    filename: 'tiny.bundle.js'
  },
  devServer: {
    contentBase: '.'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
