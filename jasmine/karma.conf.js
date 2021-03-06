module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: [
      'build/lib/jquery.min.js',
      'build/lib/angular.min.js',
      'build/lib/angular-ui-router.min.js',
      'build/lib/angular-animate.min.js',
      'build/lib/bootstrap.min.js',
      'build/lib/ziggurat.js',
      'build/lib/angular-mocks.js',
      'build/js/modules/module.js',
      'build/js/services/*.js',
      'build/js/controllers/main-loop.js',
      'jasmine/common.js',
      'jasmine/spec/*.js',
      {pattern: 'build/data/*.json', watched: true, served: true, included: false}
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'build/js/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: "lcov",
      dir: "jasmine/coverage/"
    }
  });
};
