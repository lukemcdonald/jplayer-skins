/*jshint node:true */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			build: [
				'assets/js/*.js',
				'!assets/js/*.min.js',
				'!assets/js/vendor/*.js'
			],
			grunt: {
				options: {
					jshintrc: '.jshintnoderc'
				},
				src: [ 'Gruntfile.js' ]
			}
		},
		less: {
			files: {
				src: 'assets/less/style.less',
				dest: 'style.css'
			}
		},
		pixrem: {
			files: {
				src: 'style.css',
				dest: 'style.css'
			}
		},
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: [ '> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'android 4' ],
						cascade: false
					})
				]
			},
			files: {
				src: 'style.css'
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-pixrem' );
	grunt.loadNpmTasks( 'grunt-postcss' );

	grunt.registerTask( 'default', ['build'] );

	grunt.registerTask( 'build', ['jshint', 'less', 'pixrem', 'postcss'] );
};
