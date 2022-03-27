import fileinclude from 'gulp-file-include'


export function html()
{
    const replacequotes = plugins.replacequotes
    const gulpif = plugins.gulpif
    const rename = plugins.rename
    const browsersync = plugins.browsersync

    return gulp.src(path.src.html, {sourcemap: true})
    .pipe(fileinclude(
    {
        indent: true,
        basedir: `${path.root}/${path.src.html_root}`,
        basepath: `${path.root}/${path.src.html_root}`
    }))
        .pipe(replacequotes())
        .pipe(gulpif(
            usePHP,
            rename(
            {
                extname: '.php'
            })
        ))
        .pipe(gulp.dest(path.build.html))
        .pipe(browsersync.stream())
}

