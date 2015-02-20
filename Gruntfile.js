// Project configuration.
//User Name,Access Key Id,Secret Access Key
//"turimag",AKIAJFOWTNP3DKRDECNA,D1bHAZXlZusFaLBAMwn8IyA70FrtPqqd0Qec6cUV
module.exports = function(grunt){
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        concat:{
          css:{
              src:['src/css/icons.fallback.css', 
                   'src/css/icons.data.svg.css', 
                   'src/css/icons.data.png.css', 
                   'src/css/screen.css', 
                   'src/css/irstyles.css', 
                   'src/css/assessmentTest.css', 
                   'src/css/blog.css', 
                   'src/css/font-awesome.css'
                  ],
              dest:'dest/css/style.css'
          },
          js:{
              src:[
                  "src/js/jquery-1.8.2.js", 
                  "src/js/jquery.countdown.js",
                  "src/js/responsive-tables.js",
                  //"src/js/bootstrap.min.js",
                  "src/js/owl.carousel.js",
                  "src/js/chosen.jquery.js",
                  //"src/js/Chart.js",
                  "src/js/video.js",
                  "src/js/jquery.nouislider.all.js",
                  "src/js/app.js",
                  "src/js/carousels.js",
                  //"src/js/charts.js",
                  "src/js/utilities.js",
                  "src/js/styleguide.js",
                  "src/js/checkout.js",
                  "src/js/identity-test.js",
                  "src/js/members-portal.js",
                  "src/js/dataValidator.js",
                  "src/js/modernizr.js",
                  "src/js/login.js",
                  "src/js/irapp.js",
                  "src/js/assessment-test.js"
              ],
              dest:'dest/js/script.js'
          }
        },
        cssmin: {
          css:{
            src: 'dest/css/style.css',
            dest: 'dest/css/style.min.css'
          }
        },
        uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'dest/js/script.min.js': ['dest/js/script.js']
              }
            }
          },
        compress: {
          main: {
            options: {
               // archive: 'archive.zip',
              mode: 'gzip'
            },
            files: [
              {expand: true, 
               src: ['dest/css/style.min.css'], 
               dest: '', 
               ext: '.min.gz.css'
              },
              {expand: true, 
               src: ['dest/js/script.min.js'], 
               dest: '', 
               ext: '.min.gz.js'
              }
            ]
          }
        },
        s3deploy: {
            options: {
              key: 'AKIAJFOWTNP3DKRDECNA',
              secret: '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',
              bucket: 'tr-web-v2',
              access: 'public-read',
              connections: 5
            },
            dist: {
              files: [{
                expand: true,
                cwd: 'dest/',
                src: '**/*.*',
                dest: 'style/'
              }]
            }
        },
        imagemin: {
            /*png: {
              options: {
                optimizationLevel: 7
              },
              files: [
                {
                  expand: true,
                  cwd: 'project-directory/img/',
                  src: ['**.png'],
                  dest: 'project-directory/img/compressed/',
                  ext: '.png'
                }
              ]
            },
            */
            jpg: {
              options: {
                progressive: true
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'src/img/jpg',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. project-directory/img/
                  dest: 'dest/img/jpg/',
                  ext: '.jpg'
                }
              ]
}
      }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-awssum-deploy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    grunt.registerTask('default', ['concat','cssmin','uglify','compress']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('gzip', ['compress']);
}


