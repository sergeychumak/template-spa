const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackBar = require('webpackbar')

const devMode = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const PATHS = {
  src: path.join(__dirname, '../../src'),
  dist: path.join(__dirname, '../../dist')
}

const baseConfig = {
  externals: {
    paths: PATHS
  },

  entry: {
    app: path.join(PATHS.src, 'index.ts')
  },

  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: PATHS.dist
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader'
          },
          esModule: true
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      template: "./src/index.template.html",
      filename: "index.html"
    }),

    new WebpackBar({
      name: 'client',
      color: 'yellow'
    })
  ],

  stats: {
    colors: true,
    chunks: false,
    modules: false,
    entrypoints: false,
    children: false
  }
}

module.exports = baseConfig
