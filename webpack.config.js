const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.[hash].js',
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: ['src/**/*'],
    devMiddleware: {
      stats: {
        chunk: false,
      },
    },
    hot: true,
  },
    watchOptions: {
    ignored: /node_modules/,
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }
    )],
};
