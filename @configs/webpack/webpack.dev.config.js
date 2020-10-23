const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: baseConfig.externals.paths.dist,
    port: 8080,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve) => {
  resolve(devConfig)
})
