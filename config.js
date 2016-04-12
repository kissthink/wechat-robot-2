// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'app/index.html'),
    assetsRoot: path.resolve(__dirname, 'app'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
