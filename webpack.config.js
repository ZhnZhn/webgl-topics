'use strict';
const webpack = require('webpack')
    , HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    lib: [
           "react", "react-dom", "reflux",
           "gl-matrix", "big.js",
           "babel-runtime/helpers/classCallCheck",
           "babel-runtime/helpers/createClass",
           "babel-runtime/helpers/possibleConstructorReturn",
           "babel-runtime/helpers/inherits",
           "babel-runtime/helpers/toConsumableArray",
           "babel-runtime/helpers/slicedToArray"                                      
         ],
     app: "./js/index.js"
  },
  output: {
      path: "./app",
      filename: "[name]_[chunkhash].js",
      chunkFilename: "[chunkhash].js"
  },
  resolve: {
    modulesDirectories: ['local_modules', 'node_modules']
  },
  plugins : [
    new webpack.DefinePlugin({
       'process.env' : {
          'NODE_ENV': JSON.stringify('production')
       }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['lib', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
           warnings: false
        },
        output: {
           comments: false
        }
    }),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './template/index.ejs',
        inject: 'body'
    })
  ]
};
