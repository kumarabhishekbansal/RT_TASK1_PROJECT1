const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:"./index.html"
    }),
    new ESLintPlugin(),
  ]
};

// The configuration in this file tells Webpack to use babel-loader for every file that 
// has the .js extension and excludes files in the node_modules directory for the 
// Babel compiler.
