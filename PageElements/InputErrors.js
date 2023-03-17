const { I } = inject();

module.exports = {
    locators: {
        error: '//div/input/following::p[@class="help is-danger"]'
    },

    checkInputError (errorText) {
        return I.see(errorText, this.locators.error);
    }
}