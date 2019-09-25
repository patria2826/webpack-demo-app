// npm start
// the file name can be whatever you want it to be
// you can delete the dist folder and webpack would grab things acquired from memory
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development", //setting mode to "development" can make main.js readable to human
    devtool: "none", //setting devtool to "none" can remove the "eval" in main.js
    output: {
        // the file name can be whatever you want it to be
        filename: "main.js",
        path: path.resolve(__dirname, "dist"), //the folder name can be whatever you want it to be
    }
});