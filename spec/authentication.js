Feature('Authentication page');

Scenario('should exists',  ({ I, loginPage}) => {
    loginPage.visit();
    I.see("Complex Form Authentication", loginPage.title.status);
});

Scenario(`should not login, if selector option Don't Log Me In chosen`,  ({ I, loginPage, resultPage, config}) => {
    loginPage.visit();
    loginPage.fillLogin(config.credentials.login);
    loginPage.fillPassword(config.credentials.password);

    // Select option "Don't Log Me In"
    loginPage.chooseSelection('do not login');

    loginPage.clickCheckbox();
    loginPage.clickLoginButton();

    I.see("Login Failure", resultPage.title.status);
});

Scenario(`should not login, if checkbox do not selected`,  ({ I, loginPage, resultPage, config}) => {
    loginPage.visit();
    loginPage.fillLogin(config.credentials.login);
    loginPage.fillPassword(config.credentials.password);
    loginPage.chooseSelection('login');

    // Checkbox do not selected
    
    loginPage.clickLoginButton();

    I.see("Login Failure", resultPage.title.status);
});

Scenario(`should not login, if selector option Don't Log Me In chosen AND checkbox do not selected`,  ({ I, loginPage, resultPage, config}) => {
    loginPage.visit();
    loginPage.fillLogin(config.credentials.login);
    loginPage.fillPassword(config.credentials.password);

    // Select option "Don't Log Me In"
    loginPage.chooseSelection('do not login');

    // Checkbox do not selected
    
    loginPage.clickLoginButton();

    I.see("Login Failure", resultPage.title.status);
});

Scenario(`should successfully login`,  ({ I, loginPage, resultPage, config}) => {
    loginPage.visit();
    loginPage.fillLogin(config.credentials.login);
    loginPage.fillPassword(config.credentials.password);
    loginPage.chooseSelection('login');
    loginPage.clickCheckbox();
    loginPage.clickLoginButton();

    I.see("Login Success", resultPage.title.status);
});