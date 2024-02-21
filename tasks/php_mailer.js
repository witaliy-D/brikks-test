import gulp from 'gulp';
const { src, dest } = gulp;
import { path } from '../path.js';


export function php_mailer() {
    return src(path.src.PHPMailer)
        .pipe(dest(path.build.PHPMailer))
}
