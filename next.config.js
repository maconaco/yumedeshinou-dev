const path = require('path')
const withReactSvg = require('next-react-svg')
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'resources/image'),
  webpack(config, options) {
    return config
  }
})

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})