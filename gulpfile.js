var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

// task for serve a static localhost
gulp.task('connect', function(){
  connect.server({
    root: 'public',
    port: 4000 
  });
});

gulp.task('browserify', function(){
  
  return browserify('./app/app.js')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.js', ['browserify']);
});

gulp.task('default', ['connect', 'watch']);