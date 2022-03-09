const dist_folder = 'dist'
const src_folder  = 'src'

export const path =
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
    clean: './'+dist_folder+'/**',
    root: './',
}