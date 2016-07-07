var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var pump = require('pump');
var sequence = require('gulp-sequence');
var notify = require('gulp-notify');

gulp.task('storage', function() {
    gulp.src('./').pipee(webserver({
        livereload: false,
        directoryListing: true,
        open: true
    }));
});


gulp.task('uglify-js', function (cb) {
    gulp.src([
        // './lib/quojs/quo.js',
        './lib/lungo/lungo.js',
        './src/storage/javascripts/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({
        message: 'Javascript compression has been completed!'
    }));
});

gulp.task('uglify-css', function () {
    gulp.src([
        './lib/lungo/lungo.css',
        './lib/lungo/lungo.theme.css',
        './lib/lungo/lungo.icon.css',
        './src/storage/stylesheets/app.css'
    ])
    .pipe(concatCss('app.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('dist'))
    .pipe(notify({
        message: 'Css compression has been completed!'
    }));
});

gulp.task('storage-release', ['uglify-js', 'uglify-css']);
