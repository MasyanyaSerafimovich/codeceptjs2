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
    signInPage: "./pages/SignIn.js",
    teamPage: "./pages/Team.js",
    nameSpace: "./pages/NameSpace.js",
    labels: "./pages/Label.js",
    generalSettings: "./pages/GeneralSettings.js",
    accountDelete: "./pages/AccountDelete.js",
    notifications: "./pageElements/Notifications.js",
    inputError: "./pageElements/InputErrors.js",
    actionConfirm: "./pageElements/ActionConfirm.js",
    config: "./config/cred.js"
  },
  name: 'codeceptjs-tests'
}
