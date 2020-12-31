const path = require('path')
const webpack = require('webpack')

module.exports = env => ({
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    loader: './loader.js',
    bookmarklet: './bookmarklet.js'
  },
  mode: env.production ? 'production' : 'development',
  module: {
    rules: [
      {
        parser: {
          amd: false,
          commonjs: false
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(
        env.production
          ? 'https://m3g4p0p.github.io/editor-iframe/'
          : ''
      )
    })
  ]
})
