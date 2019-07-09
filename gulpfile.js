'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('frontend/styles/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('public'));
});
