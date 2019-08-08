'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const { series, parallel } = gulp;
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const outputDir = 'docs'

gulp.task('sass', function () {
    return gulp.src('frontend/styles/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputDir));
});

gulp.task('clean', function(){
    return del(outputDir);
});

gulp.task('assets', function(){
    return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
        .pipe(gulp.dest(outputDir));
});

gulp.task('build', series(
    'clean',
    parallel('assets', 'sass')
));

gulp.task('watch', function(){
    gulp.watch('frontend/styles/**/*.*', series('sass'));
    gulp.watch('frontend/assets/**/*.*', series('assets'));
});

gulp.task('enable-browser-sync', function(){
    browserSync.init({
        server: outputDir
    });

    browserSync.watch(`${outputDir}/**/*.*`).on('change', browserSync.reload);
});


gulp.task('dev', series('build', parallel('watch', 'enable-browser-sync')));
