const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ],
      // },
      // {
      //   test: /\.sass$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader?indentedSyntax'
      //   ],
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
    ]
  },
  // externals: {
  //   vue: {
  //     // commonjs: 'vue',
  //     // commonjs2: 'vue',
  //     // amd: 'vue',
  //     root: 'Vue',
  //   },
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     'Vue': 'vue',
  //   }),
  // ],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
}
