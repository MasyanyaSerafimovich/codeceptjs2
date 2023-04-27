const { I } = inject();

module.exports = {
    title: {
        status: '.container h1'
    },

    fields: {
        username: 'input[name=email]',
        password: 'input[name=password]'
    },

    select: {
        makeSelection: '[name="selectLogin"]'
    },

    checkbox: {
        formManipulation: '[name=loveForm]',
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

    chooseSelection (option) {
        if (option == 'login') {
            I.selectOption(this.select.makeSelection, 'yes');
        } else if (option == 'do not login') {
            I.selectOption(this.select.makeSelection, 'no');
        }
    },

    clickCheckbox () {
        I.click(this.checkbox.formManipulation);
    },

    clickLoginButton () {
        I.click(this.button.logIn);
    }
}

