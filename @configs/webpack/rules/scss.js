const devMode = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports =       {
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
