import webpack from 'webpack'
import {path} from './gulp/config/path.js'
import {isDev} from './config.js'

export default
{
    mode: isDev ? 'development' : 'prodaction',
    devtool: isDev ? 'eval-source-map' : 'none',
    resolve:
    {
        alias:
        {
            '@': path.src_folder,
        },
    },

    // optimization:
    // {
    //     splitChunks:
    //     {
    //         chunks: 'all',
    //     },
    // },

    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'scss-loader'],
            }
        ]
    }
}
