'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		// Metadata
		pkg: grunt.file.readJSON('bower.json'),
		banner: '/*! jquery-oembed-plugin - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
		  ' *\n' +
		  ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.authors.join(", ") %>\n' +
		  ' * Licensed under the MIT license\n' +
		  ' *\n' +
		  ' * Forked by Andrew Mee to Provide a slightly different kind of embedding experience\n' +
		  ' */\n',

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true,
				sourceMap: true
			},
			dist: {
				src: ['src/scripts/jquery.oembed.js','src/scripts/md5.js'],
				dest: 'dist/jquery.oembed.js'
			},
			providers: {
				src: [
					'src/scripts/providers/video.js',
					'src/scripts/providers/audio.js',
					'src/scripts/providers/photo.js',
					'src/scripts/providers/rich.js',
					'src/scripts/providers/opengraph.js'
				],
				dest: 'dist/jquery.oembed-providers.js',
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/jquery.oembed.min.js'
			},
			providers: {
				src: '<%= concat.providers.dest %>',
				dest: 'dist/jquery.ombed-providers.min.js'
			}
    	},
    	qunit: {
      		files: ['test/**/*.html']
    	},
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
				src: ['src/scripts/*.js', 'src/scripts/providers/*.js']
			},
			test: {
        		options: {
          			jshintrc: 'test/.jshintrc'
        		},
        		src: ['test/**/*.js']
      		}
		},
		sass: {
			debug: {
				options: {
					style: 'nested',
					sourcemap: 'auto'
				},
				files: {
					'dist/jquery.oembed.css': 'src/styles/common.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {
					'dist/jquery.oembed.min.css': 'src/styles/common.scss'
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

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-scss-lint');

	grunt.registerTask('default', ['jshint','scsslint','qunit','concat','uglify','sass']);

	grunt.registerTask('travis', ['jshint','scsslint','qunit']);
};
