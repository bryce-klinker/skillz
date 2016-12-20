var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function make(env) {
    return {
        entry: getEntry(env),
        devtool: getDevTool(env),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js',
            sourceMapFilename: '[file].map'
        },
        resolve: {
            extensions: ['', '.tsx', '.ts', '.jsx', '.js', '.scss', '.css', '.html', '.json']
        },
        module: {
            loaders: [
                { test: /\.tsx?$/, loader: 'ts' },
                { test: /\.(scss|css)$/, loader: 'style!css!sass?modules=true&localIdentName=[name]__[local]__[hash:base64:5]' }
            ]
        },
        plugins: getPlugins(env)
    }
};

function getEntry(env) {
    if (isTest(env))
        return undefined;

    return {
        app: './src/main.tsx'
    };
}

function getDevTool(env) {
    if (isTest(env))
        return 'inline-source-map';

    if (isProd(env))
        return 'cheap-module-source-map';

    return 'source-map';
}

function getPlugins(env) {
    var plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ];

    if (isProd(env)) {
        plugins.push(new webpack.optimize.DedupePlugin());
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    return plugins;
}

function isTest(env) {
    return env === 'test';
}

function isProd(env) {
    return env === 'prod';
}