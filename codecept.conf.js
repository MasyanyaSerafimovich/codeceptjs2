const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './spec/**/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io',
      show: true,
      browser: 'chromium'
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
