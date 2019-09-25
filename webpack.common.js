// the file name can be whatever you want it to be
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js", //grab everything related to this file
    plugins: [
        new HtmlWebpackPlugin({ //generate the index.html file based on template
            template: "./src/template.html"
        })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader",   //2. Turn css into comnon js
                    "sass-loader"   //1. Turns sass into css
                ]
            }
        ]
    }
};