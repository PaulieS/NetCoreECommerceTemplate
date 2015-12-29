/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copyPlugins', function () {
    gulp.src('./bower_modules/bootstrap/dist/**').pipe(gulp.dest('./wwwroot/Components/bootstrap'));
    gulp.src('./bower_modules/jquery/dist/**').pipe(gulp.dest('./wwwroot/Components/jquery'));

});