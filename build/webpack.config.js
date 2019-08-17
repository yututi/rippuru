const path = require('path')
// const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'rippuru.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'example'),
        watchContentBase: true,
        openPage: 'example.html'
    },
    devtool: '#source-map'
}
