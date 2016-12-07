const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlTemplate      = require('html-webpack-template');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src');

const config = {
  entry:  `${APP_DIR}/main.js`,
  output: {
    path:     BUILD_DIR,
    filename: '/js/[name].js',
  },
  cache:   true,
  debug:   true,
  devtool: 'eval-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      title:      'Subway Commute',
      xhtml:      true,
      inject:     true,
      scripts: ['https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyDLO9BWFDxOz2rzAjvkDwel7aRz025PcgY'],
      template:   htmlTemplate,
      appMountId: 'container',
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|gif|jpg)$/, loader: 'file-loader?name=/images/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=/[name].[ext]' },
      { test: /\.jsx?$/, loader: 'babel' }
    ],
  },
};

if (process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
  ];

  config.plugins = config.plugins.concat(prodPlugins);

  config.cache = false;
  config.debug = false;
  config.devtool = undefined;
}

module.exports = config;
