const { I } = inject();

module.exports = {
    inputs: {
        password: '//input[@id="currentPasswordAccountDelete"]'
    },

    buttons: {
        delete: '//button[text()="Удалить мой аккаунт"]'
    },

    visit () {
        I.amOnPage('user/settings/deletion');
        I.seeInCurrentUrl('user/settings/deletion');
    }
}