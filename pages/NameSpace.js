const { I } = inject();

module.exports = {
    fields: {
        savedSearchName: '//input[@id="Title"]',
        savedSearchDescription: '//div[@role="presentation"]',
        userName: '//input[@placeholder="Введите запрос для поиска пользователя…"]'
    },

    buttons: {
        addSavedSearch: '//a[contains(@class, "button")][@href="/filters/new"]',
        createSavedSearch: '//button[contains(@class, "base-button")][text()="Создать новый сохранённый фильтр"]',
        savedSearchMenu: '//div[@class="dropdown project-title-dropdown"]',
        deleteSavedSearch: '//span[text()="Удалить"]'
    },

    checkbox: {
        teamList: '//label[@class="base-checkbox__label"]/following::span',

        getCheckboxLocator (title) {
            return this.teamList + `[text()="${title}"]`
        }
    },

    select: {
        prioritySelect: '//label[text()="Приоритет"]/following::div[@class="select"]/select'
    },

    locators: {
        searchResult: '//span[@class="search-result"]',
        savedSearchTitle: '//h1[@class="project-title"]',

        getSearchResultItemLocator (text) {
            return this.searchResult + `[text()="${text}"]`
        },

        getSavedSearchTitleLocator (title) {
            return this.savedSearchTitle + `[text()="${title}"]`
        },

        getProjectTitleLocator (title) {
            return `//a[@aria-label="${title}"]`
        }
    },

    visit () {
        I.amOnPage('/namespaces');
    }
}