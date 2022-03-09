import phpserver from 'gulp-connect-php'


export function exec()
{
    const replacequotes = plugins.replacequotes
    const gulpif = plugins.gulpif
    const rename = plugins.rename
    const browsersync = plugins.browsersync
    const fileinclude = plugins.fileinclude

    return gulp.src(path.src.php)
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulp.dest(path.build.php))
        .pipe(browsersync.stream())
}
