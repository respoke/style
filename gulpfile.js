'use strict';

var path = require('path');
var del = require('del');
var _ = require('lodash');
var respokeStyle = require('respoke-style');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var ROOT_PATH = __dirname;

var paths = {
    output: path.join(ROOT_PATH, '.tmp'),
    source: path.join(ROOT_PATH, 'style-guide')
};

function cleanTask(done) {
    del(paths.output, done);
}

function buildTask() {
    var jadeFilter = $.filter('*.jade');
    var sassFilter = $.filter('*.scss');

    return gulp.src(path.join(paths.source, '**/*'))
        .pipe(jadeFilter)
            .pipe($.jade({
                pretty: true,
                locals: respokeStyle.templateLocals
            }))
        .pipe(jadeFilter.restore())
        .pipe(sassFilter)
            .pipe($.sourcemaps.init())
                .pipe($.sass({
                    includePaths: respokeStyle.includeStylePaths()
                }))
            .pipe($.sourcemaps.write())
        .pipe(sassFilter.restore())
        .pipe(gulp.dest(paths.output));
}

function webserverTask() {
    return gulp.src(paths.output)
        .pipe($.webserver({
            host: 'localhost',
            port: '1236',
            livereload: true
        }));
}

function watchTask() {
    gulp.watch([
        path.join(paths.source, '**/*'),
        path.join(respokeStyle.paths.assets, '**/*'),
        path.join(respokeStyle.paths.styles, '**/*'),
        path.join(respokeStyle.paths.templates, '**/*')
    ], ['style-guide:build', 'style-guide:copy-assets']);
}

function copyAssets() {
    return gulp.src(path.join(respokeStyle.paths.assets, '**/*'))
        .pipe(gulp.dest(paths.output));
}

gulp.task('style-guide', [
    'style-guide:build',
    'style-guide:copy-assets',
    'style-guide:webserver',
    'style-guide:watch'
]);

gulp.task('style-guide:clean', cleanTask);

gulp.task('style-guide:build', ['style-guide:clean'], buildTask);

gulp.task('style-guide:copy-assets', ['style-guide:clean'], copyAssets);

gulp.task('style-guide:webserver', webserverTask);

gulp.task('style-guide:watch', watchTask);
