import gulp from 'gulp'

import {path} from './gulp/config/path.js'

global.path = path
global.gulp = gulp


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
            base: path.root,
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
                baseDir: path.root,
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
