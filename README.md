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
