'use strict';

const gulp = require('gulp');
const { series } = gulp;

function hello (cb) {
    console.log('helllly');
    cb();
}

function css(cb){
    console.log('css');
    cb(new Error('shitty wizard'));
}

function sourceit(cb){
    return gulp.src();
}

exports.def = series(hello, css);