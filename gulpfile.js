import gulp from 'gulp';
const { parallel, series } = gulp
import { images, imagesBuild } from './tasks/images.js';
import { symbols } from './tasks/symbols.js';
// import { sprite }from './tasks/sprite.js';
// import { webp } from './tasks/webp.js';
import { html } from './tasks/html.js';
import { copycss } from './tasks/copycss.js';
import { copyjs } from './tasks/copyjs.js';
import { files } from './tasks/files.js';
import { browser_sync } from './tasks/browser_sync.js';
import { js_main } from './tasks/js_main.js';
import { js_lib } from './tasks/js_lib.js';
import { js_libs } from './tasks/js_libs.js';
import { styles, stylesBuild } from './tasks/styles.js';
//import { php_mailer } from './tasks/php_mailer.js';
//import { php } from './tasks/php.js';
import { startwatch } from './tasks/startwath.js';
import { fontsWoff } from './tasks/fontsWoff.js';
import { fontsWoff2 } from './tasks/fontsWoff2.js';
import { cleandest, cleanlibs, cleanfont } from './tasks/clean.js';
import { favicon } from './tasks/favicon.js';
import { fontsBuild } from './tasks/fontsBuild.js';

import addFilePage from "./core/pages.js";
import addFileTemplate from "./core/template.js";
import addFileComponents from "./core/components.js";




const FONT = series(
    cleanfont,
    fontsWoff,
    fontsWoff2
);

const LIBS = series(
    cleanlibs,
    js_libs,
);

const BUILD = series(
    cleandest,
    favicon,
    fontsBuild,
    addFileTemplate,
    addFileComponents,
    addFilePage,
    stylesBuild,
    copycss,
    copyjs,
    files,
    js_main,
    js_lib,
    html,
    //php,
    //php_mailer,
    imagesBuild,
    symbols
);



const DEV = series(
    cleandest,
    favicon,
    fontsBuild,
    addFileTemplate,
    addFileComponents,
    addFilePage,
    styles,
    copycss,
    copyjs,
    files,
    js_main,
    js_lib,
    html,
    //php,
    //php_mailer,
    images,
    symbols,
    parallel(
        browser_sync,
        startwatch
    )
);


export {
    FONT,
    BUILD,
    LIBS
}

gulp.task("default", DEV)
