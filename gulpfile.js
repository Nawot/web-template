let dist_folder = 'dist'
let src_folder  = 'src'

let path        =
{
    build: 
    {
        html:  dist_folder+'/',
        pug:   dist_folder+'/',
        php:   dist_folder+'/',
        css:   dist_folder+'/css/',
        js:    dist_folder+'/js/',
        img:   dist_folder+'/img/',
        fonts: dist_folder+'/fonts/'
    },

    src: 
    {
        html:  [src_folder+'/html/**/*.html', '!'+src_folder+'/html/**/_*.html'],
        pug:   [src_folder+'/pug/**/*.pug', '!'+src_folder+'/pug/**/_*.pug'],
        php:   [src_folder+'/php/**/*.php', '!'+src_folder+'/php/**/_*.php'],
        css:   [src_folder+'/scss/**/*.scss', '!'+src_folder+'/scss/**/_*.scss'],
        js:    [src_folder+'/js/**/*.js', '!'+src_folder+'/js/**/_*.js'],
        img:    src_folder+'/img/**/*.{png,jpg,svg}',
        fonts:  src_folder+'/fonts/**/*.*'

    },

    watch: 
    {
        html:  src_folder+'/html/**/*.html',
        pug:   src_folder+'/pug/**/*.pug',
        php:   src_folder+'/php/**/*.php',
        css:   src_folder+'/scss/**/*.scss',
        js:    src_folder+'/js/**/*.js',
        img:   src_folder+'/img/**/*.{png,jpg,svg}',
        fonts: src_folder+'/fonts/**/*.*'
    },
    clean: './'+dist_folder+'/**'
}


let {src, dest}   = require('gulp'),
    gulp          = require('gulp'),
    browsersync   = require('browser-sync').create(),
    phpserver     = require('gulp-connect-php');
    rename        = require('gulp-rename')
    fileinclude   = require('gulp-file-include')
    del           = require('del')
    sass          = require('gulp-sass')(require('sass'))
    autoprefixer  = require('gulp-autoprefixer')
    beautify      = require('gulp-beautify')
    replacequotes = require('gulp-replace-quotes')
    webp          = require('gulp-webp')
    gulpif        = require('gulp-if')
    gulp_pug      = require('gulp-pug')


let usePHP = false


function browserUpdate()
{
    if(usePHP)
    {
        phpserver.server(
        {
            port: 8000,
            keepalive: true,
            base: `./${dist_folder}/`
        }, function ()
        {
            browsersync.init(
            {
                proxy: 'localhost:8000',
                port: 8000,
                notify: true
            })
        })
    }
    else
    {
        browsersync.init(
        {
            server:
            {
                baseDir: `./${dist_folder}/`,
            },
            port: 8000,
            notify: true
        })
    }
}

function html()
{
    return src(path.src.html)
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulpif(
            usePHP,
            rename(
            {
                extname: '.php'
            })
        ))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function pug()
{
    return src(path.src.pug)
    .pipe(gulp_pug(
    {
        // indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulpif(
            usePHP,
            rename(
            {
                extname: '.php'
            })
        ))
        .pipe(dest(path.build.pug))
        .pipe(browsersync.stream())
}

function php()
{
    return src(path.src.php)
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(dest(path.build.php))
        .pipe(browsersync.stream())
}

function js()
{
    return src(path.src.js)
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function css()
{
    return src(path.src.css)
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
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function img()
{
    return src(path.src.img)
        .pipe(webp(
            {
                quality: 100,
                lossless: true
            }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts()
{
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browsersync.stream())
}

function watchForFiles()
{
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.pug], pug)
    gulp.watch([path.watch.php], php)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.img], img)
}

function clean()
{
    return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(html, pug, php, js, css, img, fonts))
let watch = gulp.parallel(build, watchForFiles, browserUpdate)

exports.html    = html
exports.pug     = pug
exports.php     = php
exports.css     = css
exports.js      = js
exports.img     = img
exports.fonts   = fonts
exports.build   = build
exports.watch   = watch
exports.default = watch
