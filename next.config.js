const path = require('path')
const withPlugins = require('next-compose-plugins')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')

require('dotenv').config()

module.exports = {
    env: {
        blog_api_key: process.env.BLOG_API_KEY,
    },
}

// next.js configuration
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpeg|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            ],
        })
        return config
    },
}

module.exports = withPlugins([
        [
            withReactSvg,
            {
                include: path.resolve(__dirname, 'resources/image/svg'),
            },
        ],

        [
            withImages,
            {
                exclude: path.resolve(__dirname, 'resources/image/svg'),
            },
        ],
    ],
    nextConfig
)
