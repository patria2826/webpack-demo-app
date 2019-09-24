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
                test: /\.css$/,
                use: ["style-loader", "css-loader"] //load in reverse order, so we put style in front of css
            }
        ]
    }
};