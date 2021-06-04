const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonCfg = require('./webpack.common.js')

module.exports = merge(commonCfg, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});