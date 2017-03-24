/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var config = require('../package.json');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={
    entry:[path.join(process.cwd(),'src/index.js')],
    devtoll:'source-map',
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output:{
        library: 'PhFilter',
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:config.name+'.js'
    },
    externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react/lib/ReactDOM': {
            root: 'ReactDom',
            commonjs2: 'react/lib/ReactDOM',
            commonjs: 'react/lib/ReactDOM',
            amd: 'react/lib/ReactDOM'
        },
        'phoenix-ui': {
            root: 'Phoenix',
            commonjs2: 'phoenix-ui',
            commonjs: 'phoenix-ui',
            amd: 'phoenix-ui'
        },
        'phoenix-ui/lib/utils/Component': {
            root: 'Component',
            commonjs2: 'phoenix-ui/lib/utils/Component',
            commonjs: 'phoenix-ui/lib/utils/Component',
            amd: 'phoenix-ui/lib/utils/Component'
        }
    }],
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            { test: /\.html$/, loader: "handlebars-loader" },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=35000'
            },
            {
                test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'url-loader?name=./iconfont/[name].[ext]'
            }/*,
             {
             test: /\.less$/,
             loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
             },*/
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common.js')
        //new ExtractTextPlugin(path.join(config.name+'.css'))
    ]
};
