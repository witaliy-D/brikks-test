import gulp from 'gulp';
const { src, dest } = gulp;

import psmq from "postcss-sort-media-queries";
import autoprefixer from "autoprefixer";
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sourcemaps from "gulp-sourcemaps";
import gulpSass from "gulp-sass";
import * as dartSass from 'sass';
import postcss from "gulp-postcss";
const sass = gulpSass(dartSass);
import cssnano from "gulp-cssnano";
import browserSync from "browser-sync";


import { path } from '../path.js';


const _Browserslist = [
    ">0.5%",
    "last 4 versions",
    "edge <= 79",
    "not ie <= 11",
    "not ie_mob > 0",
    "ff >= 52",
    "chrome >= 61",
    "opera >= 60",
    "safari >= 12.1",
    "ios >= 12.2",
]


const postCssPlugins = [
    psmq(),
    autoprefixer({
        flexbox: false,
        overrideBrowserslist: _Browserslist
    }),
];

const onError = function (err) {
    notify.onError({
        title: 'Error in scss task',
        message: 'Error: <%= error.message %>',
        sound: 'Beep'
    })(err);
    this.emit('end');
};




export function styles() {
    return src(path.src.scss)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(postCssPlugins))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream());
}

export function stylesBuild() {
    //del(path.build.css)
    return src(path.src.scss)
        .pipe(sass())
        .pipe(postcss(postCssPlugins))
        .pipe(cssnano({ minifyFontValues: false, discardUnused: false }))
        .pipe(dest(path.build.css));
}
