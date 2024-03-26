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
    ],
  },
};

// The configuration in this file tells Webpack to use babel-loader for every file that 
// has the .js extension and excludes files in the node_modules directory for the 
// Babel compiler.
