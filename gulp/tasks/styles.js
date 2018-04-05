var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
cssExtend = require('postcss-extend'),
sass = require('gulp-sass'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, cssExtend, sass, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});