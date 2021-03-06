module.exports = {
	dist: {
		src: 'src/html/**/index.html',
		dest: 'dist/',
			options: {
				beautify: true,
				relative: true,
				basePath: 'src/html/',
				sections: {
					layout: {
						sitehead: 'src/layout/site-head.html',
						siteheader: 'src/layout/site-header.html',
						sitefooter: 'src/layout/site-footer.html',
						sitesvg: 'src/layout/site-svg.html',
						ariabutton: 'src/layout/script-ariabutton.html',
						}
				},
				data: {
					// Data to pass to templates
					version: "0.1.0",
					title: "test",
				},
			}
	}
}