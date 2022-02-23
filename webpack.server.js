const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    externals: [webpackNodeExternals()],

}

module.exports = merge(baseConfig, config);

