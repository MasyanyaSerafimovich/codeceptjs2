Feature('Authentication page');

Scenario('should exists',  ({ I, loginPage}) => {
    loginPage.visit();
    I.see("Complex Form Authentication", loginPage.title.status);
});

/*
Scenario('Успешная авторизация',  ({ I, loginPage, successPage, config}) => {
    signInPage.visit();
    signInPage.fillUsername(config.credentials.username);
    signInPage.fillPassword(config.credentials.password);
    I.click('Войти','.button');
    I.seeInCurrentUrl('/');
});

Scenario('Успешная авторизация',  ({ I, loginPage, successPage, config}) => {
    signInPage.visit();
    signInPage.fillUsername(config.credentials.username);
    signInPage.fillPassword(config.credentials.password);
    I.click('Войти','.button');
    I.seeInCurrentUrl('/');
});

Scenario('Добавление новой команды',  ({ I, teamPage, notifications }) => {
    teamPage.visit();
    I.click(teamPage.buttons.addTeam);
    I.fillField(teamPage.fields.teamName, teamName);
    I.click(teamPage.buttons.createTeam);
    I.click(teamPage.fields.teamDescription);
    I.fillField(teamPage.fields.teamDescription, "Лучшая команда в Мире! ");
    I.click(teamPage.buttons.saveTeam);
    I.see("Успех", notifications.locators.notificationTitle);
    I.see("Команда обновлена.", notifications.locators.notificationContent);
    teamPage.visit();
    I.see(teamName, teamPage.locators.teamList);
});

Scenario('Удаление команды',  ({ I, teamPage, notifications, actionConfirm }) => {
    teamPage.visit();
    I.see(teamName, teamPage.locators.teamList);
    I.click(teamPage.locators.getTeamNameLocator(teamName));
    I.click(teamPage.buttons.deleteTeam);
    I.click(actionConfirm.buttons.doIt);
    I.see("Успех", notifications.locators.notificationTitle);
    I.see("Команда удалена.", notifications.locators.notificationContent);
});
*/