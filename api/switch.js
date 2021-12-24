describe('Learning Switch API', () => {
    it('Toggle switch button', () => {
        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const SWITCH_ON = '~switch';

        $(FORMS_ICON_HOME_SCREEN).click();

        $(SWITCH_ON).click();

        browser.pause(5000)
    })
})