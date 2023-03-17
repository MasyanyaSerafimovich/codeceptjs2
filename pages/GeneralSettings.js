const { I } = inject();

module.exports = {
    buttons: {
        save: '//button[text()="Сохранить"]'
    },

    selects: {
        languagesRu: '//span[contains(text(),"Язык")]/following-sibling::div/select',
        languagesEn: '//span[contains(text(),"Language")]/following-sibling::div/select'
    },

    visit () {
        I.amOnPage('/user/settings/general');
        I.seeInCurrentUrl('/user/settings/general');
    }
}