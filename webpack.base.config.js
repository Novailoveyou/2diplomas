const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
}

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: 'js/[name].js',
    path: PATHS.dist,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    alias: {
      img: path.join(__dirname, './src/assets/images'),
      fonts: path.join(__dirname, './src/assets/fonts'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/programm.html',
      filename: 'programm.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/payment.html',
      filename: 'payment.html',
    }),

    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets/images`, to: `${PATHS.assets}images` },
    ]),
  ],
}
