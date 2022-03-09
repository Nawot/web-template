import webp from 'gulp-webp'


export function img()
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
