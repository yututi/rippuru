const path = require('path')
// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/example.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        }
                    },
                    'cache-loader'
                ],
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader',
                    'cache-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    'cache-loader'
                ]
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        openPage: 'index.html',
        hot: true
    },
    devtool: '#source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'example/example.html'
        })
    ]
}
