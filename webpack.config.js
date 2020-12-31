const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    bookmarklet: './bookmarklet.js'
  },
  module: {
    rules: [
      {
        parser: {
          amd: false,
          commonjs: false
        }
      }
    ]
  }
}
