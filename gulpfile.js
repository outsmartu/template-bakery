'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    { series, parallel } = gulp,
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify-es').default,
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin')

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

function minifyJS() {
    return gulp.src('frontend/assets/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(paths.prodDir))
}

function minifyCSS() {
    return gulp.src('frontend/styles/main.sass')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.prodDir))
}

function minifyImages() {
    return gulp.src('frontend/assets/images/*.*', {base: 'frontend/assets'})
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
        ]))
        .pipe(gulp.dest(paths.prodDir))
}

function copyFiles(){
    return gulp.src('frontend/assets/**/*.html')
        .pipe(gulp.dest(paths.prodDir))
}

exports.dev = series(
    series(
        clean,
        parallel(
            assets, processSass
        )
    ),
    parallel(
        watch, enableBrowserSync
    ))

exports.prod = series(
    cleanProd, parallel(
        minifyJS, minifyCSS, minifyImages, copyFiles
    )
)