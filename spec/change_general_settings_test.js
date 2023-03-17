Feature('Основные настройки');

Before(({ signInPage, config }) => {
    signInPage.authorizeMe(
        config.credentials.username,
        config.credentials.password
    );
});

Scenario('Изменение языка с Русского на Английский',  ({ I, generalSettings, notifications }) => {
    generalSettings.visit();
    I.selectOption(generalSettings.selects.languagesRu, 'en');
    I.click(generalSettings.buttons.save);
    I.see("The settings were successfully updated.", notifications.locators.notificationContent);
    I.see("The settings were successfully updated.", notifications.locators.notificationContent);
    I.see("English", generalSettings.selects.languagesEn);
});