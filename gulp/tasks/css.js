import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const  sass = gulpSass(dartSass)
import autoprefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean-css'
import groupMediaQueries from 'gulp-group-css-media-queries'


export function css()
{
    const beautify = plugins.beautify
    const replacequotes = plugins.replacequotes
    const browsersync = plugins.browsersync
    const rename = plugins.rename

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
        .pipe(groupMediaQueries())
        // Not minifed file
        .pipe(gulp.dest(path.build.css))    
        // This alredy minifed
        .pipe(clean())
        .pipe(
            rename(
                {
                    extname: '.min.css'
                })
        )
        .pipe(gulp.dest(path.build.css))
        .pipe(browsersync.stream())
}
