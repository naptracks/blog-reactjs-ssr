const path = require('path');
const webpackNodeExternals = require("webpack-node-externals");

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