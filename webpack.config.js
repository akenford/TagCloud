const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin
  ]
};
