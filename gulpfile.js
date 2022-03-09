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
import beautify from 'gulp-beautify'
import replacequotes from 'gulp-replace-quotes'
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

let build = gulp.series(clean, gulp.parallel(tasks.html, tasks.pug, tasks.php, tasks.js, tasks.css, tasks.img, tasks.fonts))
let watch = gulp.parallel(build, watchForFiles, browserUpdate)

gulp.task('default', build, watch)

