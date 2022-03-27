import * as npath from 'path'

const dist_folder = 'dist'
const src_folder  = 'src'

export const path =
{
    build: 
    {
        html:      `${dist_folder}/`,
        pug:       `${dist_folder}/`,
        php:       `${dist_folder}/`,
        css:       `${dist_folder}/css/`,
        js:        `${dist_folder}/js/`,
        img:       `${dist_folder}/img/`,
        fonts:     `${dist_folder}/fonts/`,
        svgsprite: `${dist_folder}/`,
    },

    src: 
    {
        html_root:      `${src_folder}/html`,
        html:          [`${src_folder}/html/**/*.html`, `!${src_folder}html/**/_*.html`],

        pug_root:       `${src_folder}/pug`,
        pug:           [`${src_folder}/pug/**/*.pug`, `!${src_folder}/pug/**/_*.pug`],

        php_root:       `${src_folder}/php`,
        php:           [`${src_folder}/php/**/*.php`, `!${src_folder}/php/**/_*.php`],

        css_root:       `${src_folder}/scss`,
        css:           [`${src_folder}/scss/**/*.scss`, `!${src_folder}/scss/**/_*.scss`],

        js_root:        `${src_folder}/js`,
        js:            [`${src_folder}/js/**/*.js`, `!${src_folder}/js/**/_*.js`],

        img_root:       `${src_folder}/img`,
        img:            `${src_folder}/img/**/*.{png,jpg,svg}`,

        fonts_root:     `${src_folder}/fonts`,
        fonts:          `${src_folder}/fonts/**/*.*`,

        svgsprite_root: `${src_folder}/svgsprite`,
        svgsprite:      `${src_folder}/svgsprite/**/*.svg`,
    },

    watch: 
    {
        html:      `${src_folder}/html/**/*.html`,
        pug:       `${src_folder}/pug/**/*.pug`,
        php:       `${src_folder}/php/**/*.php`,
        css:       `${src_folder}/scss/**/*.scss`,
        js:        `${src_folder}/js/**/*.js`,
        img:       `${src_folder}/img/**/*.{png,jpg,svg}`,
        fonts:     `${src_folder}/fonts/**/*.*`,
        svgsprite: `${src_folder}/svgsprite/**/*.svg`,
    },

    clean: `./${dist_folder}/**`,
    dist_folder: dist_folder,
    export_folder: './export/',
    root: './',
    rootname: npath.basename(npath.resolve())
}
