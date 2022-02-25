const path = require('path');
const webpackNodeExternals = require("webpack-node-externals");


// get client.js and index.js in entry
// and output a build folder in develop mode

module.exports = {
    mode: 'development',
    entry: {
        client: './src/client/client.js',
        bundle: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    externals: [webpackNodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    "css-loader",
                    "style-loader"
                ],

            },
        ]
    }
}