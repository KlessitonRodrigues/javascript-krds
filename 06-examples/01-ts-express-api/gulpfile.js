/* eslint-disable */
var gulp = require('gulp')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('default', function () {
    return gulp
        .src(['./src/**/*.ts', '!./src/__tests__/**/*.ts'])
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'))
})
