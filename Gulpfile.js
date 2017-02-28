var gulp = require('gulp');
var connect = require('gulp-connect');
var hap = require('connect-history-api-fallback');
var stylus = require('gulp-stylus'), nib = require('nib');
var jshint = require('gulp-jshint'), stylish = require('jshint-stylish');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

//  Servidor web de  desarrollo
gulp.task('server', function() {
    connect.server({
        root: './app',
        hostname: 'localhost',
        port: 8080,
        livereload: true,
        middleware: function(connect, opt) {
            return [ hap({}) ];
        }
    });
});

//Pre-procesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
    gulp.src('./app/modules/students/stylesheets/main.styl')
        .pipe(stylus({ use: nib() }))
        .pipe(gulp.dest('./app/modules/students/stylesheets'))
        .pipe(connect.reload());
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function(){
    gulp.src('./app/modules/students/**/*.html')
        .pipe(connect.reload());
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function(){
    return gulp.src('./app/modules/students/scripts/**/*.js')
                .pipe(jshint('.jshintrc'))
                .pipe(jshint.reporter('jshint-stylish'))
                .pipe(jshint.reporter('fail'));
});

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado para inyectarlos en el index.html
gulp.task('inject', function(){
    var sources = gulp.src(['./app/modules/students/scripts/**/*.js','./app/modules/students/stylesheets/**/*.css']);
    return gulp.src('index.html',{cwd:'./app'})
                .pipe(inject(sources,{
                    read: false,
                    ignorePath: '/app'
                }))
                .pipe(gulp.dest('./app'));
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep',function(){
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory:'./app/lib'
        }))
        .pipe(gulp.dest('./app'));
});

// Vigila cambios que se produzcan en el código y lanza las tareas relacionadas
gulp.task('watch', function() {
    gulp.watch(['./app/modules/students/**/*.html'], ['html']);
    gulp.watch(['./app/modules/students/stylesheets/**/*.styl'], ['css','inject']);
    gulp.watch(['./app/modules/students/scripts/**/*.js','./Gulpfile.js'], ['jshint','inject']);
    gulp.watch(['./bower.json'],['wiredep']);
});

gulp.task('default', ['server','inject','wiredep','watch']);
