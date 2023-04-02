Feature('Сохранённые поиски');

const savedSearchName = 'GinTonic_saved_search';

Before(({ signInPage, config }) => {
    signInPage.authorizeMe(
        config.credentials.username,
        config.credentials.password
    );
});

Scenario('Создание сохранённого поиска',  ({ I, nameSpace, config }) => {
    nameSpace.visit();
    I.click(nameSpace.buttons.addSavedSearch);
    I.click(nameSpace.fields.savedSearchName);
    I.fillField(nameSpace.fields.savedSearchName, savedSearchName);
    I.click(nameSpace.fields.savedSearchDescription);
    I.fillField(nameSpace.fields.savedSearchDescription, "\"Делай то, чего боишься, и смерть страха неизбежна.\" (Ральф Уолдо Эмерсон)");
    I.uncheckOption(nameSpace.checkbox.getCheckboxLocator("Для отображения задачи требовать истинность всех фильтров"));
    I.checkOption(nameSpace.checkbox.getCheckboxLocator("Сортировать по алфавиту"));
    I.checkOption(nameSpace.checkbox.getCheckboxLocator("Включить фильтр по приоритету"));
    I.selectOption(nameSpace.select.prioritySelect, "СДЕЛАТЬ СЕЙЧАС");
    I.fillField(nameSpace.fields.userName, config.credentials.username);
    I.click(nameSpace.locators.getSearchResultItemLocator(config.credentials.username));
    I.click(nameSpace.buttons.createSavedSearch);
    I.seeElement(nameSpace.locators.getSavedSearchTitleLocator(savedSearchName));
    nameSpace.visit();
    I.seeElement(nameSpace.locators.getProjectTitleLocator(savedSearchName));
});

Scenario('Удаление сохранённого поиска',  ({ I, nameSpace, actionConfirm, notifications }) => {
    nameSpace.visit();
    I.click(nameSpace.locators.getProjectTitleLocator(savedSearchName));
    I.click(nameSpace.buttons.savedSearchMenu);
    I.click(nameSpace.buttons.deleteSavedSearch);
    I.click(actionConfirm.buttons.doIt);
    I.see("Успех", notifications.locators.notificationTitle);
    I.see("Фильтр удалён.", notifications.locators.notificationContent);
});
