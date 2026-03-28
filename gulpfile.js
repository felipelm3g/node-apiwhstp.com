const { dest, series, src, task } = require('gulp');

function copyIcons() {
	return src(['credentials/**/*.{png,svg}', 'nodes/**/*.{png,svg}'], { base: '.' }).pipe(dest('dist'));
}

task('build:icons', copyIcons);
task('build', series('build:icons'));

