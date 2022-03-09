import gulp_pug from 'gulp-pug'


export function exec()
{
    const replacequotes = plugins.replacequotes
    const gulpif = plugins.gulpif
    const rename = plugins.rename
    const browsersync = plugins.browsersync


    return gulp.src(path.src.pug)
    .pipe(gulp_pug(
    {
        // indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulpif(
            usePHP,
            rename(
            {
                extname: '.php'
            })
        ))
        .pipe(gulp.dest(path.build.pug))
        .pipe(browsersync.stream())
}
