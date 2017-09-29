var gulp = require('gulp');
var notify = require("gulp-notify");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); //minify js
var cssnano = require('gulp-cssnano'); // minify css

gulp.task('sass', function(){
  gulp.watch('content/css/scss/**/*.scss', ['sass'])
  return gulp.src('content/css/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cssnano()) // Minify css
    .pipe(notify("Boom Sass Done!!"))
    .pipe(gulp.dest('content/css'))
});
