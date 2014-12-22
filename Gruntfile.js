module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ['jquery.oembed.js'],
			options: {
				globals: {
					jQuery: true,
					loadEmbeds: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
}