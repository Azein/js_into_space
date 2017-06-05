const { resolve } = require('path');
const webpack = require('webpack');
const CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.js'
    ],
    vendor: [
      'react-hot-loader/patch',
      'react', 'react-dom', 'three', 'react-three-renderer'
    ]
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  devServer: {
    hot: true,
    stats: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|gif|svg|jpg|eot|ttf|woff)$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CommonsPlugin({
       name: 'vendor',
       filename: 'vendor.js'
     })
  ],
};
