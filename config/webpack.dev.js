const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mapStyle = process.env.MAP_STYLE === "true";

// Merge webpack.common config with webpack.dev
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: mapStyle ? "css-loader?sourceMap" : "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
