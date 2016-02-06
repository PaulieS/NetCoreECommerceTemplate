/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
gulp.task('copyPlugins', function () {
    //gulp.src('./bower_modules/bootstrap/dist/**').pipe(gulp.dest('./wwwroot/components/bootstrap'));
    gulp.src('./bower_modules/jquery/dist/**').pipe(gulp.dest('./wwwroot/components/jquery'));
    gulp.src('./bower_modules/yamm3/yamm/**').pipe(gulp.dest('./wwwroot/components/yamm'));
    gulp.src('./bower_modules/flag-icon-css/css/**').pipe(gulp.dest('./wwwroot/components/flag-icon-css/css'));
    gulp.src('./bower_modules/slick-carousel/slick/**').pipe(gulp.dest('./wwwroot/components/slick'));
    gulp.src('./bower_modules/flag-icon-css/flags/**').pipe(gulp.dest('./wwwroot/components/flag-icon-css/flags'));
    gulp.src('./bower_modules/photoswipe/dist/**').pipe(gulp.dest('./wwwroot/components/photoswipe'));

});
gulp.task('less', function () {
    return gulp.src('./less/site.less')
        .pipe(less())
        .pipe(gulp.dest("./wwwroot/styles/"));
});
gulp.task('sass', function () {
    return gulp.src('./wwwroot/components/slick/slick-theme.scss')
    .pipe(sass())
    .pipe(gulp.dest('./wwwroot/components/slick/'));
})
gulp.task('less:watch', function () {
    gulp.watch('./less/site.less', ['less']);
});
