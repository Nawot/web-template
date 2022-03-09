import zip from 'gulp-zip'

export function zipperPines()
{
    const del = plugins.del

    del(`${path.export_folder}${path.rootname}.zip`)
    return gulp.src(`${path.dist_folder}/**/*.*`)
    .pipe(zip(`${path.rootname}.zip`))
        .pipe(gulp.dest(path.export_folder))
}
