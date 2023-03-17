Feature('Удаление аккаунта');

Before(({ signInPage, config }) => {
    signInPage.authorizeMe(
        config.credentials.username,
        config.credentials.password
    );
});

Scenario('Ошибка неверного пароля при удалении аккаунта',  ({ I, accountDelete, notifications }) => {
    accountDelete.visit();
    I.fillField(accountDelete.inputs.password, 'incorrect_assword');
    I.click(accountDelete.buttons.delete);
    I.see("Неверное имя пользователя или пароль.", notifications.locators.notificationContent);
});

Scenario('Попытка удаления аккаунта без указания пароля - Вывод ошибки',  ({ I, accountDelete, inputError }) => {
    accountDelete.visit();
    I.click(accountDelete.buttons.delete);
    inputError.checkInputError('Введите свой пароль.');
});