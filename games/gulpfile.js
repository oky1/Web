// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var uncss = require('gulp-uncss');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(concat('all.css'))
        .pipe(uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(rename('uncss.css'))
        .pipe(gulp.dest('css/concat+uncss'))  
        .pipe(browserSync.stream());   
});

// Minify Css
gulp.task('css', function () {
  gulp.src('css/concat+uncss/*.css')
    .pipe(rename('min.css'))
    .pipe(uglifycss({
      "max-line-len": 80
    }))
    .pipe(gulp.dest('min/min-css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('min/min-js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('min/min-js'));
});

// minify images
gulp.task('img', () => {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('min/min-img'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
      baseDir: "./"
    },
    startPath: "/index.html"
  });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'css', 'scripts', 'img', 'serve', 'watch']);