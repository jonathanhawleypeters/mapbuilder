module.exports = {

	img: {
		files: [
			{expand: true, cwd: 'src/img', src: ['**'], dest: 'dist/img'},
		]
	},
	css: {
		files: [
			{expand: true, cwd: 'src/css', src: ['**'], dest: 'dist/css'},
		]
	},
	script: {
		files: [
			{expand: true, cwd: 'src/scripts', src: ['**'], dest: 'dist/scripts'},
		]
	}

};