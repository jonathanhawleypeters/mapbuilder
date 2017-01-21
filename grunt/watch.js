module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    css: {
        files: [
            'src/css/*.css'
        ],
        tasks: [
            'css'
        ]
    },
	
	html: {
        files: [
            'src/html/**/*.html'
        ],
        tasks: [
            'html'
        ]
    },
	script: {
        files: [
            'src/**/*.js'
        ],
		tasks: [
            'script'
        ]
    },
	img: {
        files: [
            'src/img/**/*'
        ],
		tasks: [
            'img'
        ]
    },
};
