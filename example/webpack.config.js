'use strict';

var webpack = require('webpack'),
    path = require('path');

module.exports={
    devtool: 'cheap-module-eval-source-map',
    cache: true,
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname,'./dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

