const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'UiLib': [
            './Scripts/UiLib.ts'
        ]
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'UiLib.js',
        path: path.resolve(__dirname, 'wwwroot'),
    },
};