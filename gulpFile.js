const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

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

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
