module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

	//register my own task
	/*
	grunt.registerMultiTask('title', 'description', function() {
	    node.js might be
      grunt.util.async.forEach(this.filesSrc, function(file, next) {console.log(file)}, this.async());
	});
	*/

  grunt.initConfig({

    less: {
        compile: {
            files: {
                "./assets/main.css": "./assets/main.less",
            }
        }
    },

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/out'
				}]
			}

		},

		connect: {
      server: {
        options: {
  			hostname: 'localhost',
        port: 9001,
        base: '.',
  			keepalive: true
        }
      }
		},

		//syntax
		jshint: {
      files: ['scripts/main.js', 'scripts/**/*.js'],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },

		requirejs: {
			options: {
				baseUrl: '.',
				nextame: 'main',
				out: 'build/app.js'
			}
		},

		pkg: grunt.file.readJSON('package.json'),

    uglify: {
      main: {
        files: {
            'build/scripts.min.js': '<%= concat.main.dest %>'
        }
      }
    }
  });

  //tasks task
  grunt.registerTask('default', ['jshint', 'imagemin', 'less']);
};
