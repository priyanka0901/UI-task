module.exports = function(grunt) {

grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),

    sass: {
        development: {
            options: {
                style: 'expaned'
            },
            files: {
                'css/style.css': 'sass/style.scss'
            }
        }
    },
    watch: {
      css: {
        files: ['sass/*.scss', 'sass/*/*.scss'],
        tasks: ['sass']
      }
    }

 });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['watch','sass']);

};