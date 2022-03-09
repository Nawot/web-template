import gulp from 'gulp'

import {path} from './gulp/config/path.js'
import {plugins} from './gulp/config/plugins.js'

global.path = path
global.gulp = gulp
global.plugins = plugins
global.usePHP = false


import * as tasks from './gulp/tasks/index.js'

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

let build = gulp.series(tasks.clean, gulp.parallel(tasks.html, tasks.pug, tasks.php, tasks.js, tasks.css, tasks.img, tasks.fonts))
let watch = gulp.parallel(build, watchForFiles, browserUpdate)

gulp.task('default', build, watch)

