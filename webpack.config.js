const path = require('path')
module.exports = {
    mode: 'development',
    entry: 'src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //まとめた結果出力されるファイル名
    },
    resolve: {
        extensions: ['.ts', '.js'] //拡張子がtsだったらTypescirptでコンパイルする
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader' //ts-loader使うよ
            }
        ]
    }
}