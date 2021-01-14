const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const filename = "[name].[contenthash]"

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main: './index.js',
        analitics: './analytics.js',
    },
    output: {
        filename: filename + ".js",
        path: path.resolve(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [
            '.js',
            '.json',
        ],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    devServer: {
        port: 4200,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ],

            }
        ),
        new MiniCssExtractPlugin({
            filename: filename + ".css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {},
                    // },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: 'file-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            },
            {
                test: /\.csv$/,
                use: 'csv-loader'
            },
        ]
    }
}