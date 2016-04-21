var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('less', function () {
    gulp.src('css/style.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(csso())
        .pipe(gulp.dest('css/min'))
        .pipe(reload({stream:true}));
});

gulp.task('watch',function () {
    browserSync.init({
        server:{
            baseDir:'./',
            index:'index.html'
        }
    });
    gulp.watch('css/*.less',['less']).on('change', reload);
    gulp.watch(['index.html','view/**']).on('change', reload);
});
