import webpack from 'webpack'
import {path} from './gulp/config/path.js'

export default
{
    mode: 'development',
    entry: './src/js/main.js',
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
