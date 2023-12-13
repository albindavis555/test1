module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/test3'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromePath'],
    customLaunchers: {
    ChromePath: {
    base: 'Chrome',
    flags: [
      '--headless',          // Run Chrome in headless mode (no GUI)
      '--disable-gpu',       // Disable GPU hardware acceleration
      '--no-sandbox',        // Disable sandboxing for Linux
      '--disable-software-rasterizer',  // Disable software rasterizer
      // Add more flags as needed
    ]
  }
},
    singleRun: false,
    restartOnFileChange: true
  });
};
