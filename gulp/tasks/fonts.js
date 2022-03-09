export function fonts()
{
    const browsersync = plugins.browsersync

    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browsersync.stream())
}
