'use strict';
var respokeStyle = require('respoke-style');


module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        jade: {
            myFile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    // 'to path': 'from path'
                    "build/my-jade-file.html": ["my-jade-file.jade"]
                }
            }
        },
        sass: {
            dist: {
                files: {
                    // 'to path': 'from path'
                    'assets/styles/base.css': respokeStyle.paths.styles + '/base.scss'
                }
            },
            myStyles: {
                files: {
                    'myLocalStylesheet.css': 'path/to/localStylesheet.scss'
                }
            }
        }
    });

    grunt.registerTask('default',[
        'jade:myFile',
        'sass:dist',
        'sass:myStyles'
    ]);


};
