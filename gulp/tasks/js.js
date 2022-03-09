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
        .pipe(gulp.dest(path.build.js))
        .pipe(browsersync.stream())
}
