let mode = "development"

if (process.env.NODE_ENV === "production") mode = "production"

module.exports = {
  mode: mode,
  // devtool: false, // dist/main.js looks clean
  devtool: "source-map", // to check source map in console

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