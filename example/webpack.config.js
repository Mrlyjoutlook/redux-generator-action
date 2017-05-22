'use strict';

var webpack = require('webpack'),
    Dashboard = require('webpack-dashboard'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    dashboard = new Dashboard(),
    path = require('path');

module.exports={
    devtool: 'cheap-module-eval-source-map',
    cache: true,
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname,'./dist/assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }],
    },
    plugins: [
        new DashboardPlugin(dashboard.setData),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

