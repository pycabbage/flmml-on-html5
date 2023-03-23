const common = require("./webpack.common.js");

/** @type {import('webpack').Configuration} */
module.exports = {
    ...common,
    ...{
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
            contentBase: __dirname,
            publicPath: "/dist",
            injectClient: false
        }
    }
};
