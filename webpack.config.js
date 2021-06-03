const MiniCssExtractPlugin = require("mini-css-extract-plugin")
let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  // target = "browserslistrc"
}

module.exports = {
  mode: mode,
  target: target,
  // devtool: false, // dist/main.js looks clean
  devtool: "source-map", // to check source map in console

  output: {
    assetModuleFilename: "images/[hash][ext][query]"  
  },

  module: {
    rules: [
      {
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