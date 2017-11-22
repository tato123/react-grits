const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-grits.js",
    library: ["MyLib"],
    libraryTarget: "umd",
    publicPath: "/dist/"
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx_)$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
