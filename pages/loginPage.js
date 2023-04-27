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

    title: {
        status: '.container h1'
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

    Authentication (username, password) {
        this.visit();
        this.fillLogin(username);
        this.fillPassword(password);
        I.click(this.button.logIn);
        I.seeElement(this.locators.userName);
    }
}

