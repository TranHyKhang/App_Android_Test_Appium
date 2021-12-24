describe('Learning WebdriveIO API', () => {
    it('learn getValue API', () => {
        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const INPUT_TEXT = '~text-input';
        const INPUT_TEXT_DISPLAY = '~input-text-result';

        //Click on Login on HomeScreen
        $(FORMS_ICON_HOME_SCREEN).click();

        //Fill email text field
        $(INPUT_TEXT).setValue('hykhang@hykhang.com');

        //Fill password text field
       let rs = $(INPUT_TEXT_DISPLAY).getText()

        //Click login button
        console.log(rs);

        browser.pause(5000)


    })
})