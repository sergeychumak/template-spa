const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const buildConfig = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
        ignoreOrder: true
      }
    )
  ]
})

module.exports = new Promise((resolve) => {
  resolve(buildConfig)
})
