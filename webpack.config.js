const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //编译模式，development，production
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.js/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jpg$/, type: 'asset/inline' },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    },
    plugins: [ htmlPlugin]
}