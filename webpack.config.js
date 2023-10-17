const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //入口
    entry: './src/index.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js',
    },
    mode: 'development',
    devServer: {
        static: './dist',
        port: 5000,
    },
    module: {
        rules: [
            //css loader
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            //babel loader
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //gif loader
            {
                test: /\.gif/,
                type: 'asset/resource'
            }
        ],
    },
    devtool: 'source-map',
    //透過插件協助webpack執行除了讀取以外的動作
    plugins: [
        new HtmlWebpackPlugin({
            template: './base.html' //以base.html當做產生模板
        }),
        new MiniCssExtractPlugin({ //將css檔案獨立出來
            filename: 'main.[hash].css'
        })
    ],
};