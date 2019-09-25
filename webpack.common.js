// the file name can be whatever you want it to be
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {  //grab everything in the files
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
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