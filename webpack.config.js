const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-grits.js",
    library: "react-grits",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        enforce: "pre",
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx_)$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "_",
      root: "_"
    }
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"]
  }
};
