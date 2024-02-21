import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';
import browserSync from "browser-sync";

export function php() {
    return src(path.src.php)
        .pipe(dest(path.build.php))
        .pipe(browserSync.stream());
}
