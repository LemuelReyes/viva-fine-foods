var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
  console.log("hooray");
});

gulp.task('html', function(){
  console.log("HTML WOOO");
});

gulp.task('styles', function(){
  console.log("imagine css here!");
});

gulp.task('watch', function(){
  watch('./index.html', function(){
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});