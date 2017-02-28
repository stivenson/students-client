module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            './app/lib/angular/angular.js',
            './app/lib/angular-mocks/angular-mocks.js',
            './app/lib/angular-route/angular-route.js',
            './app/lib/angular-resource/angular-resource.js',
            './app/modules/students/scripts/*.js',
            './tests/modules/students/*.js'
        ],
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['Chrome', 'Firefox'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
    });
};
