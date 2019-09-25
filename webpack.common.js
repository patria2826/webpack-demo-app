// the file name can be whatever you want it to be
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js", //grab everything related to this file
    plugins: [
        //generate the index.html file based on template
        new HtmlWebpackPlugin({ template: "./src/template.html" }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader",   //2. Turn css into comnon js
                    "sass-loader"   //1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"] //https://webpack.js.org/loaders/html-loader/
            },
            {
                test: /\.()svg|png|jpg|gif$/,
                use: {
                    loader: "file-loader", //resolves import/require() on a file into a url and emits the file into the output directory
                    options: {
                        name: "[name].[hash].[ext]", //"ext" stands for "extension"(must key ext instead of extension, or this won't work)
                        outputPath: "imgs"  // create a folder in the output directory by the name of "imgs" in this case for emitted files
                    }
                }
            }
        ]
    }
};