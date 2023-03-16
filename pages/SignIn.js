const { I } = inject();

module.exports = {
    fields: {
        username: '#username',
        password: '#password'
    },

    locators: {
        userName: '//span[@class="username"]'
    },

    visit () {
        I.amOnPage('/login');
    },

    fillUsername (username) {
        I.fillField(this.fields.username, username);
    },

    fillPassword (password) {
        I.fillField(this.fields.password, password);
    },

    authorizeMe (username, password) {
        this.visit();
        this.fillUsername(username);
        this.fillPassword(password);
        I.click('Войти','.button');
        I.seeElement(this.locators.userName);
    }
}

