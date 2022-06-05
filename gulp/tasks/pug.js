import gulp_pug from 'gulp-pug'


export function pug()
{
    const replacequotes = plugins.replacequotes
    const gulpif = plugins.gulpif
    const rename = plugins.rename
    const browsersync = plugins.browsersync


    return gulp.src(path.src.pug, {sourcemap: true})
    .pipe(gulp_pug(
    {
        pretty: true,
        basedir: `${path.root}/${path.src_folder}`
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
