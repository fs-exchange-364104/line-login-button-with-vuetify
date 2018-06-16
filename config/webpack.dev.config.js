const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const resolve = file => path.resolve(__dirname, file)

module.exports = merge(baseWebpackConfig, {
  entry: [
    './dev/index.js'
  ],
  output: {
    filename: '[name].js',
    path: resolve('../dev'),
    publicPath: '/dev/',
    library: 'LineLoginButton',
  },
  resolve: {
    alias: {
      'line-login-button': resolve('../src'),
    },
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: resolve('../dev'),
    host: HOST || 'localhost',
    port: PORT || 8080,
    publicPath: '/dev/',
  },
  devtool: '#eval-source-map',
})
