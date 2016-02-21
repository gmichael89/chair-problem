var gulp = require('gulp');


var paths = {
    dev: {
        indexHtml: './src/index.html'
    },
    prod: {
        indexHtml: './src/index.html'
    },
};

gulp.task('assets', function(){
    return gulp.src(
        paths.dev.indexHtml
    )
    .pipe()
    .dest(paths.prod.indexHtml);
});


gulp.task('default', function(){

});
