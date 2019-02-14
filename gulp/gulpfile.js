const gulp = require('gulp');
const imagemin = require('gulp - imagemin');
const uglify = require('gulp - uglify')

// 定义任务
gulp.task('message', function () {
    return console.log('ffffff')
});
// 执行任务 gulp message

// 定义默认任务 执行任务 gulp 
gulp.task('default', function () {
    return console.log('ffffff')
}); 
// 拷贝文件
gulp.copy("copyhtml",function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});
// 图片压缩 npm i gulp-imagemin
gulp.task("imagemin", function () {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
// js 压缩 npm i uglify
gulp.task("minify", function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
