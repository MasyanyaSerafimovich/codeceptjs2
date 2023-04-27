const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './spec/**/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://authenticationtest.com/',
      show: true,
      browser: 'chromium',
      locale: 'ru-RU'
    }
  },
  plugins: {
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/loginPage.js",
    successPage: "./pages/successPage.js",
  },
  name: 'codeceptjs-tests'
}
