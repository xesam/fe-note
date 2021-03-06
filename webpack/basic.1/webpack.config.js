const path = require("path");

module.exports = {
    entry: ["./entry-1.js", "./entry-2.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {}
};
