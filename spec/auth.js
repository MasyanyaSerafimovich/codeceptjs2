Feature('Авторизация');

Scenario.only('Успешная авторизация',  ({ I, signInPage, config}) => {
    signInPage.visit();
    signInPage.fillUsername(config.credentials.username);
    signInPage.fillPassword(config.credentials.password);
    I.click('Войти','.button');
    I.seeInCurrentUrl('/');
});
