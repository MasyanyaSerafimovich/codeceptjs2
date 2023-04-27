const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');



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
  include: {
    I: './steps_file.js',
    loginPage: "./pages/loginPage.js",
    resultPage: "./pages/resultPage.js",
    config: "./config.js",
  },
  name: 'codeceptjs'
}
