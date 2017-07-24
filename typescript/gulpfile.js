var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
var jasmine = require('gulp-jasmine');

gulp.task('tsc', function(){
    gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest('src/'))
        .on('end', () => {
            gulp.src('spec/**/*.spec.ts')
                .pipe(tsProject())
                .js.pipe(gulp.dest('spec/'))
                .on('end', () => {
                    gulp.src('spec/**/*.spec.js')
                    .pipe(jasmine());
                });
        });
});

gulp.task('watch', function(){
    gulp.watch(['src/**/*.ts', 'spec/**/*.ts'], ['tsc']);
});