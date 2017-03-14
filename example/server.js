'use strict'
const webpack = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      config = require('./webpack.config'),
      path = require('path'),
      open = require('open');

new WebpackDevServer(webpack(config),{
        contentBase: path.join(__dirname,'./'),
        historyApiFallback: true,
        hot: true,
        inline:true,
        port: 8000,
        publicPath: '/assets/',
        noInfo: false
    }).listen(8000,'localhost',err=>{
    if(err) console.log(err);
    console.log('listening at localhost:8000');
    console.log('open your system browser!')
    open('http://localhost:8000');
})