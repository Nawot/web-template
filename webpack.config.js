import webpack from 'webpack'
import {path} from './gulp/config/path.js'

export default
{
    mode: 'development',
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
