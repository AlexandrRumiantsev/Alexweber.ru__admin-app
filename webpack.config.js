const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}
