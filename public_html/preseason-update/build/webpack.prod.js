const webpack = require('webpack');
const path = require('path');

const project = require('./package.json').project;


module.exports = {
    entry: {
        main: `${project.es6}/main.js`,
        runeBuilder: `${project.es6}/runeBuilder/index.jsx`,
        customizer: `${project.es6}/customizer/index.jsx`,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/js/',
        chunkFilename: '[name].js',
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'lib/js/runeBuilder'),
            customizer: path.resolve(__dirname, 'lib/js/customizer'),
            react: 'preact-compat',
            'react-dom': 'preact-compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class',
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, project.es6),
        ],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env',
                        'react',
                    ],
                    plugins: [
                        // Common plugins
                        'transform-object-assign',
                        'transform-es2015-destructuring',
                        'transform-object-rest-spread',
                        'syntax-dynamic-import',
                        'styled-components',
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        ],
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        //     'process.env.NODE_ENV': JSON.stringify(true),
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // this assumes your vendor imports exist in the node_modules directory
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
        }),

        new webpack.optimize.UglifyJsPlugin(),

        new webpack.optimize.ModuleConcatenationPlugin(),

    ],
    devtool: 'source-map',
};
