const gulp = require('gulp');
const ava = require('gulp-ava');
const notify = require("gulp-notify");
gulp.task('default', () => {
    return gulp.src('test.js')
        // gulp-ava needs filepaths so you can't have any plugins before it
        .pipe(ava())
        .pipe(notify());
});

gulp.watch('*.js', ['default']);
