const gulp = require('gulp'),
  pug = require('gulp-pug'),
	postcss = require('gulp-postcss'),
	  cssnext = require('postcss-cssnext'),
	  atImport = require('postcss-import'),
	  cssnano = require('cssnano'),
	  mqpacker = require('css-mqpacker'),
    fontMagician = require('postcss-font-magician'),
	browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', () => {
	browserSync.init({
    server: './'
  });
 })
gulp.task('css', ()=>{

  const processor = [
    atImport(),
    fontMagician({
      variants: {
          'Ubuntu Mono': {
            '400': [],
            '700': []
          },
          'Nunito': {
            '400': [],
            '600': [],
            '700': []
          }
        }
      }),
    //cssnested,
    cssnext({browsers: ['> 5%', 'ie 8']}),
    mqpacker(),
    cssnano()
  ]
  return gulp.src('./src/postcss/*.css')
    //.pipe(sourcemaps.init())
    .pipe(postcss(processor))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', ()=>{
	gulp.watch('./src/postcss/*.css', ['css'])
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./src/jade/*.pug', ['pug'])
	gulp.watch('./js/*.js').on('change', browserSync.reload)
})
gulp.task('pug', ()=>{
  gulp.src('./src/jade/*.pug')
  .pipe(pug({
    pretty: false
  }))
  .pipe(gulp.dest('./'))
})

gulp.task('default',['watch','serve'])