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
		sass: {
			options: {
				outputStyle: 'nested',
				sourceMap: true
			},
			files: [{
				expand: true,
				cwd: 'src/styles',
				src: ['*.scss'],
				dest: 'dist/styles',
				ext: '.css'
			}]
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['jshint', 'sass']);
};