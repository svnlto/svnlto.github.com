/*global module:false*/

module.exports = function (grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // Project configuration.
  grunt.initConfig({

    watch: {
      files: ['assets/less/app.less'],
      tasks: ['recess']
    },

    less: {
      dev: {
        options: {
          paths: ["assets/less"]
        },
        files: {
          "assets/css/app.css": "assets/less/app.less"
        }
      }
    },

    recess: {
      dist: {
        src: 'assets/css/app.css',
        options: {
          strictPropertyOrder: false,
          noUniversalSelectors: false,
          noOverqualifying: false,
          noIDs: false,
          noUnderscores: false,
          zeroUnits: false
        }
      }
    },

  });

  // Default task.
  grunt.registerTask('default', 'less', 'recess');

};
