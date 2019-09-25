// npm start
// the file name can be whatever you want it to be
// you can delete the dist folder and webpack would grab things acquired from memory
// https://webpack.js.org/guides/development/#using-webpack-dev-server
// webpack-dev-server doesn't write any output files after compiling.
// Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.
// If your page expects to find the bundle files on a different path, 
// you can change this with the publicPath option in the dev server's configuration.
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development", //setting mode to "development" can make main.js readable to human
    devtool: "none", //setting devtool to "none" can remove the "eval" in main.js
    output: {
        // the file name can be whatever you want it to be
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"), //the folder name can be whatever you want it to be
    },
    plugins: [
        // generate an html file based on template,
        // and includes all your webpack bundles in the body using <script> tags
        // If you have multiple webpack entry points,
        // they will all be included with <script> tags in the generated HTML.
        new HtmlWebpackPlugin({ 
            template: "./src/template.html",
         }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles in the form of js into DOM
                    "css-loader",   //2. Turn css into common js
                    "sass-loader"   //1. Turns sass into css
                ]
            },
        ]
    }
});