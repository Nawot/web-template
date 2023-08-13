import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const  sass = gulpSass(dartSass)


import postcss from 'gulp-postcss'


export function scss()
{
    const browsersync = plugins.browsersync

    return gulp.src(path.src.scss, {sourcemap: true})
        .pipe(
            sass(
            {
                outputStyle: 'expanded',
                includePaths: [`${path.root}/${path.src.css_root}`, 'node_modules'],
            })
        )
        .pipe(postcss())
        .pipe(gulp.dest(path.build.scss))
        .pipe(browsersync.stream())
}
