export function exec()
{
    const browsersync = plugins.browsersync

    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browsersync.stream())
}
