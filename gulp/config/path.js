import * as npath from 'path'

const dist_folder = 'dist'
const src_folder  = 'src'


const technical_directories = ['include', 'mixins', 'functions']
const technical_names       = ['_*']

// TODO Combine html, css, js converters to one pathes
export const path =
{
    build: 
    {
        html:      `${dist_folder}/`,
        pug:       `${dist_folder}/`,
        php:       `${dist_folder}/`,
        scss:      `${dist_folder}/css/`,
        js:        `${dist_folder}/js/`,
        img:       `${dist_folder}/img/`,
        fonts:     `${dist_folder}/fonts/`,
        svgsprite: `${dist_folder}/`,
    },

    src: 
    {
        html_root:      `${src_folder}/pages`,
        html:           [`${src_folder}/pages/**/*.html`],

        pug_root:       `${src_folder}/pages`,
        pug:           [`${src_folder}/pages/**/*.pug`],

        php_root:       `${src_folder}/php`,
        php:           [`${src_folder}/pages/**/*.php`],

        scss_root:      `${src_folder}/scss`,
        scss:          [`${src_folder}/scss/!(${technical_names.join('|')}).scss`, `${src_folder}/scss/!(${technical_directories.join("|")})/!(${technical_names.join("|")}).scss`],

        js_root:        `${src_folder}/js`,
        js:            [`${src_folder}/js/!(${technical_names.join('|')}).js`, `${src_folder}/js/!(${technical_directories.join("|")})/!(${technical_names.join("|")}).js`],

        img_root:       `${src_folder}/img`,
        img:            `${src_folder}/img/**/*.{png,jpg,svg}`,

        fonts_root:     `${src_folder}/fonts`,
        fonts:          `${src_folder}/fonts/**/*.*`,

        svgsprite_root: `${src_folder}/svgsprite`,
        svgsprite:      `${src_folder}/svgsprite/**/*.svg`,
    },

    watch: 
    {
        html:      `${src_folder}/(pages|templates|layouts)/**/*.html`,
        pug:       `${src_folder}/(pages|templates|layouts)/**/*.pug`,
        php:       `${src_folder}/(pages|templates|layouts)/**/*.php`,
        css:       `${src_folder}/scss/**/*.scss`,
        js:        `${src_folder}/js/**/*.js`,
        img:       `${src_folder}/img/**/*.{png,jpg,svg}`,
        fonts:     `${src_folder}/fonts/**/*.*`,
        svgsprite: `${src_folder}/svgsprite/**/*.svg`,
    },

    clean: `./${dist_folder}/**`,
    dist_folder: dist_folder,
    src_folder: src_folder,
    export_folder: './export/',
    root: npath.resolve(),
    rootname: npath.basename(npath.resolve())
}
