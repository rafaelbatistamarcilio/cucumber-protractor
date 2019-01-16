exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'features/*.feature'
    ],
    cucumberOpts: {
        require: [
            'tests/steps/*.step.js',
        ],
        format: ['json:results.json'],
        profile: false,
        'no-source': true,
        afterLaunch: function () {
            var reporter = require('cucumber-html-reporter');

            var options = {
                theme: 'bootstrap',
                jsonFile: 'results.json',
                output: 'report/cucumber_report.html',
                reportSuiteAsScenarios: true,
                launchReport: true
            };

            reporter.generate(options);
        },
    }
}