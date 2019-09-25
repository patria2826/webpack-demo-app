// npm run build
// the file name can be whatever you want it to be
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //no need to implement in dev because extracting css takes time
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); //originally installed minimizeer for js
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production", //production mode sets minimizer to terser-webpack-plugin
    output: {
        // adding [contentHash](changes if the file has changed) to the file name for cache busting
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist"), //the folder name can be whatever you want it to be
    },
    optimization: {
        minimizer: [
            new TerserPlugin(), //have to add this because the css minimizer has overridden it
            new OptimizeCssAssetsWebpackPlugin(),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader",   //2. Turn css into common js
                    "sass-loader"   //1. Turns sass into css
                ]
            },
        ]
    }
});