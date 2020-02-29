const path = require('path')
const withPlugins = require('next-compose-plugins')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')
const Dotenv = require('dotenv-webpack')

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
        config.plugins = [
            ...config.plugins,

            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
            }),
        ]
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
