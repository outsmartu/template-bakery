'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    { series, parallel } = gulp,
    browserSync = require('browser-sync').create()

sass.compiler = require('node-sass')


const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev'

const paths = {
    releaseDir: 'docs',
    prodDir: 'docs',
    devDir: 'docs'
}

function processSass() {
    return gulp.src('frontend/styles/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.devDir))
}

function clean() {
    return del(paths.devDir)
}

function assets() {
    return gulp.src('frontend/assets/**', { since: gulp.lastRun(assets) })
        .pipe(gulp.dest(paths.devDir))
}

function watch() {
    gulp.watch('frontend/styles/**/*.*', series(processSass));
    gulp.watch('frontend/assets/**/*.*', series(assets))
}

function enableBrowserSync() {
    browserSync.init({
        server: paths.devDir
    });

    browserSync.watch(`${paths.devDir}/**/*.*`).on('change', browserSync.reload)
}

function cleanProd() {
    return del(paths.prodDir)
}

exports.dev = series(series(clean, parallel(assets, processSass)), parallel(watch, enableBrowserSync))
exports.prod = series(cleanProd)