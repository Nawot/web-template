export function php()
{
    const browsersync = plugins.browsersync
    const fileinclude = plugins.fileinclude

    return gulp.src(path.src.php, {sourcemap: true})
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(gulp.dest(path.build.php))
        .pipe(browsersync.stream())
}
