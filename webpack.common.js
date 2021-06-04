const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    path: path.resolve(__dirname, 'dist')    
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  },
};