const autoprefixer = require('autoprefixer')
const combine = require('postcss-combine-media-query')
const nano = require('cssnano')

module.exports =
{
    parser: 'postcss-scss',
    plugins:
    [
        autoprefixer(
        {
            browsers:
            [
				'> 5%',
				'last 2 versions',
			],
        }),
        combine(),
        nano(),
    ],
}
