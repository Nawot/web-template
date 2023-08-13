import fileinclude from 'gulp-file-include'


export function html()
{
    const gulpif = plugins.gulpif
    const rename = plugins.rename
    const browsersync = plugins.browsersync

    return gulp.src(path.src.html, {sourcemap: true})
    .pipe(fileinclude(
    {
        indent: true,
        basedir: `${path.root}/${path.src_folder}`,
        basepath: `${path.root}/${path.src_folder}`
    }))
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

