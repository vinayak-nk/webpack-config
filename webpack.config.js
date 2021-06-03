const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslistrc"
}

module.exports = {
  mode: mode,
  target: target,
  // devtool: false, // dist/main.js looks clean
  devtool: "source-map", // to check source map in console

  module: {
    rules: [
      {
        // test: /\.s?css$/i, //scss or css
        // test: /\.(sc|c)ss$/i, //scss or css
        test: /\.(s[ac]|c)ss$/i, //scss or sass or css
        use: [
          MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/, //js or jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    contentBase: './dist', // live reloading enabled after adding this
    hot: true,
  },
};