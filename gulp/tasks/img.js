import webp from 'gulp-webp'


export function exec()
{
    const browsersync = plugins.browsersync

    return gulp.src(path.src.img)
        .pipe(webp(
            {
                quality: 100,
                lossless: true
            }))
        .pipe(gulp.dest(path.build.img))
        .pipe(browsersync.stream())
}
