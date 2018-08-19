const path = require('path');
const webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const  VueLoaderPlugin  = require('vue-loader/lib/plugin');
module.exports = {
    //开发时调试使用
    // devtool: "source-map",
    entry: './entry/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            { test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            { test: /\.js$/,exclude: /node_modules/, use: 'babel-loader'},
            { test: /\.vue$/,exclude: /node_modules/, use: 'vue-loader'},
            {
                test: /\.(png|jpg)\w*/,
                loader: 'url-loader',
                options: {
                    limit: '1024',
                    name:'[name].[ext]',
                    outputPath:'img/',
                    // publicPath:'output/'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'url-loader',
                options: {
                    limit: '1024',
                    name:'[name].[ext]',
                    outputPath:'font/',
                    // publicPath:'output/'
                }
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin("styles.css"),
        new VueLoaderPlugin()
],
    devServer: {
        contentBase: "./output",//本地服务器所加载的页面所在的目录
        inline: true,//实时刷新
    }
};