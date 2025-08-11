const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? 'assets/[name].[contenthash].js' : 'assets/bundle.js',
    clean: true,
    publicPath: '/',
  },
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    port: 5173,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 10 * 1024 } },
        generator: { filename: 'assets/images/[name][hash][ext]' },
      },
      {
        test: /\.(woff2?|ttf|eot|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][hash][ext]' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
    }),
  ],
  resolve: { extensions: ['.js', '.jsx'] },
};
