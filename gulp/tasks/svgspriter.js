import svgSprite from 'gulp-svg-sprite'

export function svgSpriter()
{
    const browsersync = plugins.browsersync

    return gulp.src(path.src.svgsprite)
        .pipe(
            svgSprite(
                {
                    mode:
                    {
                        stack:
                        {
                            sprite: '../sprite.svg',
                        }
                    },
                })
        )
        .pipe(gulp.dest(path.build.svgsprite))
        .pipe(browsersync.stream())
}
