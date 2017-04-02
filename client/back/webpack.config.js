const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        // publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    context: resolve(__dirname, 'src'),
    // 基础目录

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server

        historyApiFallback: true,
        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        port: 8080,
        // 设置默认监听端口，如果省略，默认为"8080"

        publicPath: '/'
        // match the output `publicPath`
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader?modules&importLoaders=1']
            // }, 
            {
                test: /plugin\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "postcss-loader" // compiles Sass to CSS
                },{
                    loader: "sass-loader?outputStyle=expanded&sourceMap" // compiles Sass to CSS
                },],
                // exclude: /node_modules/
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[hash:4].[name].[ext]'
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)\??.*$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],

    // 将html中引用的jq对象设置为全局模块
    // 之后可以这样使用 import $ from 'jquery';
    // externals: {
    //     jquery: 'window.jQuery'
    // }
};