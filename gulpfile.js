var gulp = require('gulp');
var pug = require('gulp-pug');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');


 // ** Tareas  ** //

//Task pug //
 gulp.task('pug', function() {
  gulp.src('./pug/**/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
 });

// Task HTML
gulp.task('html', function () {
    gulp.src('./**/*.html')
    .pipe(connect.reload());
});

// Task css
// gulp.task('css', function () {
//     gulp.src('./**/*.css')
//     .pipe(connect.reload());
// });

//Task Js
 gulp.task('js', function () {
     gulp.src('./js/*.js')
     .pipe(connect.reload());
 });

// Task sass
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss/')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
        }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});


// Task autoprefixer
// gulp.task('autoprefixer', function (){
//     gulp.src('./Clase10-Sass/')
//         .pipe(plumber())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./Clase10-Sass/dist/'))
//         .pipe(connect.reload());
// });


// static server
gulp.task('connect', function() {
    connect.server({
    root: './',
    livereload: true

  });
});

//**  End Tareas **//

// Vigilar para Cambios Automaticos
gulp.task('default',['html','sass','pug','js','connect'], function() {

  gulp.watch('./pug/**/*.pug', ['pug']);
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./js/*.js', ['js']);
//   gulp.watch('./**/*.css', ['css']);
//   gulp.watch('./Clase9-Lo-nuevo-en-CSS3-y-el-futuro-de-CSS/animaciones/styles.css', ['autoprefixer']);


 });
