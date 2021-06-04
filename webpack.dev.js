const { merge } = require('webpack-merge');
const commonCfg = require('./webpack.common.js');

module.exports = merge(commonCfg, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 9000,
    hot: true
  },
});
