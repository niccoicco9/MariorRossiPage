//jshint ignore: start

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('correzione', function(){
    return gulp.src('source/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('copy', function(){
    
    gulp.src('source/*.*').pipe(gulp.dest('dist'));

});