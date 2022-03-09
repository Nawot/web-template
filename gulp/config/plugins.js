import gulpif from 'gulp-if'
import del from 'del'
import browsersync from 'browser-sync'
import rename from 'gulp-rename'
import replacequotes from 'gulp-replace-quotes'

export const plugins =
{
    gulpif: gulpif,
    del: del,
    browsersync: browsersync,
    rename: rename,
    replacequotes: replacequotes,
}
