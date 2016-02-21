var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        javascript: './src/main.js',
        html: './src/index.html'
    },
    output: {
        path: 'app/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                //loader: 'style!css!autoprefixer-loader?browsers=last 2 version!sass?outputStyle=expandedsass?outputStyle=expanded'
                loader: 'style!css!sass?outputStyle=expandedsass?outputStyle=expanded'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
            '.json',
            '.sass'
        ]
    }
};
