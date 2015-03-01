module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var htmlFiles = [
    'public/index.html'
  ];

  var lessFiles = [
    'public/less/**/*.less'
  ];

  var jsClientFiles = [
    'public/js/**/*.js',
    'public/js/**/*.jsx'
  ];

  var jsServerFiles = [
    'server.js'
  ];

  var jsFiles = jsClientFiles.concat(jsServerFiles);

  var jsClientSpecFiles = [
    'test/public/js/**/*.js',
    'test/public/js/**/*.jsx'
  ];

  var jsServerSpecFiles = [];

  var jsSpecFiles = jsClientSpecFiles.concat(jsServerSpecFiles);

  var allFiles = htmlFiles.concat(lessFiles.concat(jsFiles).concat(jsSpecFiles));

  grunt.initConfig({
    watch: {
      scripts: {
        files: allFiles,
        tasks: ['default']
      }
    },
    eslint: {
      target: jsFiles.concat(jsSpecFiles)
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/fonts/',
            src: ['**'],
            dest: 'public/dist/fonts/'
          }
        ]
      }
    },
    less: {
      build: {
        files: {
          'public/dist/task-react-sample.css': 'public/less/main.less'
        }
      }
    },
    cssmin: {
      css: {
        files: {
          'public/dist/task-react-sample.min.css': 'public/dist/task-react-sample.css'
        }
      }
    },
    browserify: {
      build: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          'public/dist/task-react-sample.js': jsClientFiles
        }
      },
      test: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          'test/public/dist/task-react-sample-spec.js': jsClientSpecFiles
        }
      }
    },
    uglify: {
      js: {
        options: {
          sourceMap: true,
          sourceMapName: 'public/dist/task-react-sample.min.map'
        },
        files: {
          'public/dist/task-react-sample.min.js': 'public/dist/task-react-sample.js'
        }
      }
    },
    karma: {
      phantomjs: {
        configFile: 'karma.conf.js'
      }
    },
    clean: [
      'node_modules',
      'public/dist',
      'test/public/dist'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['browserify:test', 'karma:phantomjs']);
  grunt.registerTask('build', ['copy:main', 'less', 'cssmin', 'browserify:build', 'uglify']);
  grunt.registerTask('default', ['lint', 'test', 'build']);
};
