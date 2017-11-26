const gulp = require('gulp'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', () => {
	browserSync.init({
    server: './'
  });
 })


// Tarea para vigilar los cambios
gulp.task('watch', ()=>{
	gulp.watch('./jade/*.pug', ['pug'])
	gulp.watch('./*.html').on('change', browserSync.reload)
})
gulp.task('pug', ()=>{
  gulp.src('./jade/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
})

gulp.task('default',['watch','serve'])