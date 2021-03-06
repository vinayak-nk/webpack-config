# webpack-config


1. npm init -y
2. npm i -D webpack webpack-cli webpack-dev-server

3. webpack.config.js -- live reloading
  module.exports = {
    mode: "development",
    devtool: false, // to make dist/main.js look good

    devServer: {
      contentBase: './dist' // live update
    },
  };

4. Babel
----------
npm i -D babel-loader @babel/core @babel/preset-env

module.exports = {
  mode: "development",
  devtool: false, // dist/main.js looks clean

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devServer: {
    contentBase: './dist' // live reloading enabled after adding this
  },
};

babel.config.js
---------------
module.exports = {
  presets: [
    "@babel/preset-env"
  ],
}

5. source maps and setting up mode and cross env
---------------
devtool: "source-map", // to check source map in console

-->> npm i -D cross-env
package.json
"scripts": {
    "start": "webpack serve",
    "watch": "webpack --watch",
    "build": "cross-env NODE_ENV=production webpack"
  },

let mode = "development"

if (process.env.NODE_ENV === "production") mode = "production"

module.exports = {
  mode: mode,
  ...
}
============
6. CSS, SASS, mini-css-extract-plugin, postcss and hot reloading
----------------------------------------------------------
npm i -D css-loader mini-css-extract-plugin
npm i -D sass sass-loader
npm i -D postcss postcss-preset-env postcss-loader

1. .browserslistrc
2. postcss.config.js
3. 

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
  plugins: [
    new MiniCssExtractPlugin()
  ],

      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",
        ],
      },

  hot: true,

hot reloading bug, browserslistrc
-------------------------
let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslistrc"
}

====================================================================
7. react jsx
-------------
npm i react react-dom redux react-redux react-router-dom redux-devtools-extension redux-saga 

npm i -D @babel/preset-react

babel -> ["@babel/preset-react", { runtime: "automatic" }]
webpack
--------
  {
    test: /\.jsx?$/, //js or jsx
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

========================================================================
8. images
-----------

  output: {
    assetModuleFilename: "images/[hash][ext][query]"  
  },

rules
-----{
        test: /\.(png|jpe?g|gif|svg)$/i,
        // type: 'asset/resource' // all the images added to images folder in dist
        // type: 'asset/inline' // all the images added to js
        type: 'asset', //images handled based on size
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 8 * 10,
        //   }
        // }
      },

==========================================================================
9. Automated cleaning
-->> npm i -D html-webpack-plugin

  const HtmlWebpackPlugin = require("html-webpack-plugin")

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],

-->> npm i -D clean-webpack-plugin

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],

const path = require('path')
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    path: path.resolve(__dirname, 'dist')    
  },
============================
9. webpack split
-------------------
npm i -D webpack-merge

const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonCfg = require('./webpack.common.js')

module.exports = merge(commonCfg, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

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
================================
