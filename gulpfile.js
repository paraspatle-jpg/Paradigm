import pkg from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const {src,dest,watch,series} = pkg;

const buildStyles = () => {
    return src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./css'));
  };
  

const watcher = () => {
    watch(['./scss/**/*.scss'], buildStyles);
  };

  export default series(buildStyles,watcher)