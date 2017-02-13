import gulp from 'gulp';
import babel from 'gulp-babel';

const src = ['./src/*.js', './src/*/*.js'];

gulp.task('babel', () =>
  gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest('./lib')),
);

gulp.task('watch', () => {
  gulp.watch(src, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
