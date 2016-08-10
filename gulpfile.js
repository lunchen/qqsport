var gulp = require('gulp');
// var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus')
var paths = {
  // scripts: ['./dev_resource/js/*'],
  stylus: ['./dev/stylus/*']
};

// gulp.task('scripts', function() {
//   return gulp.src(paths.scripts)
//       .pipe(uglify())
//     .pipe(gulp.dest('./pro_resource/js'));
// });

gulp.task('stylus-1', function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({
        compress:true
      }))
    .pipe(gulp.dest('./pro/css'));
});


gulp.task('watch', function() {
  // gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylus, ['stylus-1']);
});

gulp.task('default', ['watch','stylus-1']);