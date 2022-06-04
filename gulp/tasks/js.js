import gulpWebpack from 'webpack-stream'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config.js'

export function js()
{
    const replacequotes = plugins.replacequotes
    const browsersync = plugins.browsersync
    const fileinclude = plugins.fileinclude

    return gulp.src(path.src.js, {sourcemap: true})
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(path.build.js))
        .pipe(browsersync.stream())
}
