const HtmlWebPackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const isProd = mode === 'production'

module.exports = {
    mode,
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    devtool: isProd ? false : 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        removeEmptyChunks: isProd,
        mergeDuplicateChunks: isProd,
    },
}
