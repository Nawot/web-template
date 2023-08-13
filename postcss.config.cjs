const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const combine = require('postcss-combine-media-query')
const sort = require('postcss-sort-media-queries')
const nano = require('cssnano')

module.exports =
{
    parser: 'postcss-scss',
    plugins:
    [
        tailwindcss(),
        autoprefixer(
        {
            browsers:
            [
				'> 5%',
				'last 2 versions',
			],
        }),
        combine(),
        sort({sort: 'desktop-first'}),
        nano(),
    ],
}
