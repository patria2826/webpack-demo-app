// the file name can be whatever you want it to be
const path = require("path");
module.exports = {
    mode: "development", //setting mode to "development" can make main.js readable to human
    // devtool: "none", //setting devtool to "none" can remove the "eval" in main.js 
    entry: "./src/index.js", //grab everything related to this file
    output: {
        filename: "main.js", //the file name can be whatever you want it to be
        path: path.resolve(__dirname, "dist"), //the file name can be whatever you want it to be
    },
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