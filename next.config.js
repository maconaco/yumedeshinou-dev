const path = require('path')
const withReactSvg = require('next-react-svg')
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'resources/image/svg'),
  webpack(config, options) {
    return config
  }
})

const withImages = require('next-images')
module.exports = withImages({
  exclude: path.resolve(__dirname, 'resources/image/svg'),
  webpack(config, options) {
    return config
  }
})