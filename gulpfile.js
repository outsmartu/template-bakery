'use strict';

const gulp = require('gulp');

gulp.task(hello);

function hello (cb) {
    console.log('helllly');
    cb();
}


exports.hello = hello;