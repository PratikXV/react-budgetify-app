const path = require('path');

module.exports={
    entry: './src/play/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devserver:{
        contentBase: path.join(__dirname, 'public')
    }
};