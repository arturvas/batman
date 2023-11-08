const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
}

function styles() {
  return (
    gulp
      // recuperamos o arquivo
      .src("./src/styles/*.scss")
      // .pipe para compilar
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(gulp.dest("./dist/css"))
  );
}

function images() {
  return (
    gulp
      // recuperamos o arquivo
      .src("./src/images/**/*")
      // .pipe para compilar
      .pipe(imagemin())
      .pipe(gulp.dest("./dist/images"))
  );
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
};
