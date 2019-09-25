// npm run build
// the file name can be whatever you want it to be
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        // adding [contentHash](changes if the file has changed) to the file name for cache busting
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist"), //the folder name can be whatever you want it to be
    }
});