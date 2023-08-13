import gulpif from 'gulp-if'
import del from 'del'
import browsersync from 'browser-sync'
import rename from 'gulp-rename'
import fileinclude from 'gulp-file-include'
import beautify from 'gulp-beautify'
import newer from 'gulp-newer'


export const plugins =
{
    gulpif: gulpif,
    del: del,
    browsersync: browsersync,
    rename: rename,
    fileinclude: fileinclude,
    beautify: beautify,
    newer: newer,
}
