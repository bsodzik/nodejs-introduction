
module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.initConfig({
		jshint: {
			options: {
				node: true,
				maxlen: 90
			},
			all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
		},
		nodeunit: {
			all: ['test/**/*_test.js']
		}
	});

	grunt.registerTask('default', ['jshint', 'nodeunit']);
};