import gulp from 'gulp'

import {path} from './gulp/config/path.js'
import {plugins} from './gulp/config/plugins.js'
import * as config from './config.js'

global.path = path
global.gulp = gulp
global.plugins = plugins
global.usePHP = false

global.isDev = config.isDev
global.isProd = config.isProd

import * as tasks from './gulp/tasks/index.js'

function watchForFiles()
{
    gulp.watch(path.watch.html, () => 
	{
        if(config.useTailwind)
            tasks.scss()
        return tasks.html()
    })
    gulp.watch(path.watch.pug, () => 
	{
		if(config.useTailwind)
            tasks.scss()
        return tasks.pug()
    })
    gulp.watch(path.watch.php, () => 
	{
		if(config.useTailwind)
            tasks.scss()
        return tasks.php()
    })

    gulp.watch(path.watch.js, tasks.js)
    gulp.watch(path.watch.css, tasks.scss)
    gulp.watch(path.watch.img, tasks.img)
    gulp.watch(path.watch.fonts, tasks.fonts)
    gulp.watch(path.watch.svgsprite, tasks.svgSpriter)
}

const compile = gulp.parallel(gulp.series(tasks.html, tasks.php, tasks.pug), tasks.js, tasks.scss, tasks.img, tasks.fonts, tasks.svgSpriter)
const dev = gulp.series(tasks.clean, compile, gulp.parallel(tasks.server, watchForFiles))

gulp.task('default', dev)
gulp.task('ZipperPines', gulp.series(tasks.clean, compile, tasks.zipperPines))

