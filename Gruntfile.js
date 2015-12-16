'use strict';
var respokeStyle = require('respoke-style');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

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
                    "build/templates/head.html": ["templates/head.jade"],
                    "build/templates/footer.html": ["templates/footer.jade"],
                    "build/templates/navbar.html": ["templates/navbar.jade"]
                }
            }
        },
        sass: {
            dist: {
                files: {
                    // 'to path': 'from path'
                    'build/styles/base.css': respokeStyle.paths.styles + '/base.scss',
                    'build/styles/highlight-js-theme.css': respokeStyle.paths.styles + '/highlight-js-theme.scss',
                    'build/styles/old.css': respokeStyle.paths.styles + '/old.scss'
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    src: [respokeStyle.paths.assets + "/*"],
                    dest: 'build/assets/',
                    filter: 'isFile'
                }]
           }
        }
    });

    grunt.registerTask('default',[
        'jade:myFile',
        'sass:dist',
        'copy:dist'
    ]);
};