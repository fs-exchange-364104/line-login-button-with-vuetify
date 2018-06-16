const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const resolve = file => path.resolve(__dirname, file)

module.exports = merge(baseWebpackConfig, {
  entry: './src/index.js',
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    library: 'LineLoginButton',
    libraryTarget: 'umd',
    filename: 'line-login-button.min.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ],
})
