
module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.initConfig({
		jshint: {
			options: {
				node: true,
				maxlen: 90
			},
			all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
		},
		mochaTest: {
			test: {
				src: ['test/**/*.js']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'mochaTest']);
};