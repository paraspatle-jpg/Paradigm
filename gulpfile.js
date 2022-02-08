import pkg from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const {src,dest,watch,series} = pkg;

const buildStyles = () => {
    return src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./css'));
  };
  

const watcher = () => {
    watch(['./sass/**/*.scss'], buildStyles);
  };

  export default series(buildStyles,watcher)