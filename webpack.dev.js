const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname,
    compress: true,
    hot: true,
    port: 9000,
  },
});
