const { I } = inject();

module.exports = {
    fields: {
        username: 'input[name=email]',
        password: 'input[name=password]'
    },

    checkbox: {
        formManipulation: '[name=loveForm]',
    },

    select: {
        makeSelection: '[name="selectLogin"]'
    },

    button: {
        logIn: '[type=submit]'
    },

    visit () {
        I.amOnPage('/complexAuth');
    },

    fillLogin (username) {
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

