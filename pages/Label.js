const { I } = inject();

module.exports = {
    buttons: {
        newLabel: '[href="/labels/new"]',
        createLabel: '//button[text()="Создать"]',
        label: '//div[contains(@class, "labels-list")]/span/button',
        cross: 'following::button[contains(@class, "delete")]',
        deleteConfirm: '//button[text()="Сделать это!"]'
    },

    inputs: {
        newLabel: '#labelTitle'
    },

    locators: {
        notificationTitle: '//div[@class="notification-title"]',
        notificationContent: '//div[@class="notification-content"]'
    },

    visit () {
        I.amOnPage('/labels');
    },

    findLabelCrossLocator (labelTitle) {
        return `//button[text()='${labelTitle}']/${this.buttons.cross}`;
    }
}