var grunt = require('grunt');

grunt.initConfig({
  config : grunt.file.readJSON('./.config'),
  
  lambda_invoke : {
    default : {

    }
  },
  lambda_package : {
    default : {

    }
  },
  lambda_deploy : {
    default : {
      'arn' : '<%= config.arn %>'
    }
  }
  
});



grunt.loadNpmTasks('grunt-aws-lambda');
grunt.registerTask('default', ['lambda_invoke']);
grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
