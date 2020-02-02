const path = require('path')
const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')

// next.js configuration
const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: 'build',
  webpack: (config, options) => {
    return config;
  },
};

module.exports = withPlugins([
  [withReactSvg, {
    include: path.resolve(__dirname, 'resources/image/svg'),
  }],

  [withImages, {
    exclude: path.resolve(__dirname, 'resources/image/svg'),
  }],
  
], nextConfig);