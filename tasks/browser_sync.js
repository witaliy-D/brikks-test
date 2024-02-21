import browserSync from "browser-sync";
import { way } from '../path.js';

export function browser_sync() {
    browserSync.init({
        server: {
            baseDir: way,
            index: 'index.html'
        },
        //proxy: 'job-app-8',
        //notify: false, // Отключаем уведомления
        online: true, // Режим работы
        //open: false
    })
}
