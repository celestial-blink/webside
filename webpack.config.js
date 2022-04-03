const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
/**@type {import('webpack').Configuration} */

const isProduction = process.env.MODE === 'production';
const styles = ["css-loader"];
styles.unshift(isProduction ? MiniCssExtractPlugin.loader : 'style-loader');

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        minify: false,
        inject: 'body',
        title: isProduction ? 'Production' : 'Development'
    })
];
if (isProduction) {
    plugins.unshift(new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: 'styles/[name].[contenthash].css' }), new BundleAnalyzerPlugin());
}

const optimization = { runtimeChunk: true };
if (isProduction) {
    optimization.minimize = true;
    optimization.splitChunks = {
        chunks: 'all',
    },
    optimization.runtimeChunk = {
        name: (entrypoint) => `runtimechunk~${entrypoint.name}`
    };
}

const devServer = {
    static: {
        directory: path.join(__dirname, 'build'),
        watch: true
    },
    compress: true,
    historyApiFallback: true,
    port: 1197,
    hot: "only",
    allowedHosts: "auto",
    proxy: {
        "/api": {
            target: "http://localhost:80",
            secure: false,
            changeOrigin: true
        }
    }
}

module.exports = {
    entry: './src/index.js',
    devtool: isProduction ? false : 'eval-source-map',
    target: "web",
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: styles
            },
            {
                test: /\.scss$/,
                use: styles.concat(['sass-loader'])
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    fileName: 'images/[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            "@config": path.resolve(__dirname, './src/config'),
            "@images": path.resolve(__dirname, './src/images'),
            "@views": path.resolve(__dirname, './src/views'),
            "@scripts": path.resolve(__dirname, './src/scripts'),
        }
    },
    plugins: plugins,
    optimization: optimization,
    ...(isProduction ? {} : { devServer: devServer })
}