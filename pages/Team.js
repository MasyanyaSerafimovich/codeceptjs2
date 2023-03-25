const { I } = inject();

module.exports = {
    fields: {
        teamName: '#teamName',
        teamDescription: '//div[@role="presentation"]'
    },

    buttons: {
        addTeam: '//a[contains(@class, "button")][@href="/teams/new"]',
        createTeam: '//button[contains(@class, "base-button")][text()="Создать"]',
        saveTeam: '//button[text()="Сохранить"]',
        deleteTeam: '//button[contains(@class, "base-button")]/*[name()="svg"][@data-icon="trash-can"]'
    },

    locators: {
        teamList: '//ul[@class="teams box"]/li/a'
    },

    visit () {
        I.amOnPage('/teams');
    }
}

