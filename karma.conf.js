module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      'chai'
    ],
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'test/public/dist/task-react-sample-spec.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
