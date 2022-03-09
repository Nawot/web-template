import gulp from 'gulp'

import {path} from './gulp/config/path.js'
import {plugins} from './gulp/config/plugins.js'

global.path = path
global.gulp = gulp
global.plugins = plugins
global.usePHP = false


import * as tasks from './gulp/tasks/index.js'


import browsersync from 'browser-sync'
import phpserver from 'gulp-connect-php'
import rename from 'gulp-rename'
import fileinclude from 'gulp-file-include'
import del from 'del'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const  sass = gulpSass(dartSass)
import autoprefixer from 'gulp-autoprefixer'
import beautify from 'gulp-beautify'
import replacequotes from 'gulp-replace-quotes'
import webp from 'gulp-webp'
import gulpif from 'gulp-if'
import gulp_pug from 'gulp-pug'


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

function pug()
{
    return gulp.src(path.src.pug)
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
        .pipe(gulp.dest(path.build.pug))
        .pipe(browsersync.stream())
}

function php()
{
    return gulp.src(path.src.php)
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulp.dest(path.build.php))
        .pipe(browsersync.stream())
}

function js()
{
    return gulp.src(path.src.js)
    .pipe(fileinclude(
    {
        indent: true
    }))
        .pipe(replacequotes())
        .pipe(gulp.dest(path.build.js))
        .pipe(browsersync.stream())
}

function css()
{
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

function img()
{
    return gulp.src(path.src.img)
        .pipe(webp(
            {
                quality: 100,
                lossless: true
            }))
        .pipe(gulp.dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts()
{
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
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

let build = gulp.series(clean, gulp.parallel(tasks.html.exec, pug, php, js, css, img, fonts))
let watch = gulp.parallel(build, watchForFiles, browserUpdate)

gulp.task('default', build, watch)

