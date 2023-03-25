Feature('Метки');

const labelTitle = 'крокодил';

Before(({ signInPage, config }) => {
    signInPage.authorizeMe(
        config.credentials.username,
        config.credentials.password
    );
});

Scenario('Добавление новой метки',  ({ I, labels }) => {
    labels.visit();
    I.click(labels.buttons.newLabel);
    I.fillField(labels.inputs.newLabel, labelTitle);
    I.click(labels.buttons.createLabel);
    I.see(labelTitle, labels.buttons.label);
});

Scenario('Удаление метки',  ({ I, labels, notifications, actionConfirm }) => {
    labels.visit();
    I.see(labelTitle, labels.buttons.label);
    I.click(labels.findLabelCrossLocator(labelTitle));
    I.click(actionConfirm.buttons.doIt);
    I.see("Метка удалена", notifications.locators.notificationContent);
});