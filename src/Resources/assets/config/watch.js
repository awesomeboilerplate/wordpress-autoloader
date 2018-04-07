module.exports = {
	scripts: {
		files: [
			'<%= config.src %>/js/**/*.js',
		],
		tasks: [
			'eslint',
			'browserify',
			'uglify'
		],
		options: {
			spawn: false
		}
	},
	css: {
		files: [
			'<%= config.src %>/scss/**/*'
		],
		tasks: [
			'scsslint',
			'sass',
			'postcss',
			'cmq',
			// 'px_to_rem',
			// 'imageEmbed'
		],
		options: {
			spawn: false
		}
	},
	jpg: {
		files: ['<%= config.src %>/img/**/*.jpg'],
		tasks: ['imagemin:jpg'],
		options: {
			spawn: false
		}
	},
	png: {
		files: ['<%= config.src %>/img/**/*.png'],
		tasks: ['imagemin:png'],
		options: {
			spawn: false
		}
	},
	svgs: {
		files: ['<%= config.src %>/svg/**/*'],
		tasks: ['imagemin:svgs', 'svgstore'],
		options: {
			spawn: false
		}
	},
	fonts: {
		files: ['<%= config.src %>/fonts/**/*'],
		tasks: ['copy:custom_fonts'],
		options: {
			spawn: false
		}
	},
	languages: {
		files: ['../inc/languages/*.po'],
		tasks: ['po2mo'],
		options: {
			spawn: false
		}
	}
};
