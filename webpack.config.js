const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const Critters = require('critters-webpack-plugin');
const glob = require('glob');

module.exports = {
  mode: 'production', // Optimized for production
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true, // Clean old files in the 'dist' directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240, // Only compress files >10KB
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240, // Only compress files >10KB
      minRatio: 0.8,
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
      safelist: [/^fa-/], // Keep necessary FontAwesome classes
    }),
    new Critters({
      preload: 'swap',
      compress: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // Extend default minimizers
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000, // 20KB
      maxSize: 200000, // Reduced maximum chunk size to 200KB
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
          enforce: true,
        },
        fontAwesome: {
          test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
          name: (module) => {
            const match = module.context && module.context.match(/[\\/]@fortawesome[\\/](free-[a-z]+)[\\/]/);
            return match ? match[1] : 'fontawesome-unknown'; // Default to 'fontawesome-unknown' if no match
          },
          chunks: 'all',
          enforce: true,
        },
        commons: {
          test: /[\\/]src[\\/]/,
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 3072000, // Increased to 3MB
    maxEntrypointSize: 5120000, // Increased to 5MB
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    compress: true,
    open: true,
  },
};
