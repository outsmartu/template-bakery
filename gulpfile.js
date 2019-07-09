'use strict';

const gulp = require('gulp');
const { series } = gulp;

function hello (cb) {
    console.log('helllly');
    cb();
}

function css(cb){
    console.log('css');
    cb();
}

exports.def = series(hello, css);