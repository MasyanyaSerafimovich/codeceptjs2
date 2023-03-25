const { I } = inject();

module.exports = {
    buttons: {
        newLabel: '[href="/labels/new"]',
        createLabel: '//button[text()="Создать"]',
        label: '//div[contains(@class, "labels-list")]/span/button',
        cross: 'following::button[contains(@class, "delete")]'
    },

    inputs: {
        newLabel: '#labelTitle'
    },

    visit () {
        I.amOnPage('/labels');
    },

    findLabelCrossLocator (labelTitle) {
        return `//button[text()="${labelTitle}"]/${this.buttons.cross}`;
    }
}