import gulpWebpack from 'webpack-stream'
import webpack from 'webpack'
import lazypipe from 'lazypipe'


import {useWebpack} from '../../config.js'
import webpackConfig from '../../webpack.config.js'

export function js()
{
    const replacequotes = plugins.replacequotes
    const browsersync = plugins.browsersync
    const fileinclude = plugins.fileinclude
    const gulpif = plugins.gulpif

    // Gulp stream
    const noWebpackChain = lazypipe()

    return gulp.src(path.src.js, {sourcemap: true})
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulpif(useWebpack,
            gulpWebpack(webpackConfig, webpack)
        ))

        .pipe(gulp.dest(path.build.js))
        .pipe(browsersync.stream())
}
