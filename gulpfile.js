import gulp from 'gulp'

import {path} from './gulp/config/path.js'
import {plugins} from './gulp/config/plugins.js'

global.path = path
global.gulp = gulp
global.plugins = plugins
global.usePHP = false


import * as tasks from './gulp/tasks/index.js'

function watchForFiles()
{
    gulp.watch(path.watch.html, tasks.html)
    gulp.watch(path.watch.pug, tasks.pug)
    gulp.watch(path.watch.php, tasks.php)
    gulp.watch(path.watch.js, tasks.js)
    gulp.watch(path.watch.css, tasks.css)
    gulp.watch(path.watch.img, tasks.img)
}

let build = gulp.series(tasks.clean, gulp.parallel(tasks.html, tasks.pug, tasks.php, tasks.js, tasks.css, tasks.img, tasks.fonts))
let watch = gulp.parallel(build, watchForFiles, tasks.server)

gulp.task('default', build, watch)

