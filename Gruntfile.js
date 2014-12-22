module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			gruntfile: {
        		options: {
          			jshintrc: '.jshintrc'
        		},
        		src: 'Gruntfile.js'
  			},
			src: {
				options: {
					jshintrc: 'src/scripts/.jshintrc',
					ignores: ['src/scripts/md5.js']
				},
				src: ['src/scripts/*.js']
			},
			test: {
        		options: {
          			jshintrc: 'test/.jshintrc'
        		},
        		src: ['test/**/*.js']
      		}
		},
		qunit: {
      		files: ['test/**/*.html']
    	},
    	uglify: {
			release: {
				src: 'src/scripts/jquery.oembed.js',
				dest: 'dist/jquery.oembed.min.js'
			}
    	},
		sass: {
			debug: {
				options: {
					style: 'nested',
					sourcemap: 'auto'
				},
				files: {
					'dist/jquery.oembed.css': 'src/styles/jquery.oembed.scss'
				}
			},
			release: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'dist/jquery.oembed.min.css': 'src/styles/jquery.oembed.scss'
				}
			}	
		},
		scsslint: {
			all: [
				'src/styles/*.scss'
			],
			options: {
				config: 'src/styles/.scss-lint.yml',
				colorizeOutput: true,
				exclude: ['src/styles/mixins.scss']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-scss-lint');

	grunt.registerTask('default', ['jshint', 'scsslint', 'sass']);
};