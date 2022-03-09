import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const  sass = gulpSass(dartSass)
import autoprefixer from 'gulp-autoprefixer'


export function css()
{
    const beautify = plugins.beautify
    const replacequotes = plugins.replacequotes
    const browsersync = plugins.browsersync

    return gulp.src(path.src.css)
        .pipe(
            sass(
            {
                outputStyle: 'expanded'
            })
        )
        .pipe(
            autoprefixer(
            {
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            })
        )
        .pipe(
            beautify.css(
            {
                'brace_style': 'expand',
                'indent_with_tabs': true,
                'indent_size': 4
            })
        )
        .pipe(replacequotes())
        .pipe(gulp.dest(path.build.css))
        .pipe(browsersync.stream())
}
