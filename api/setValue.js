describe('Learning WebdriveIO API', () => {
    it('Should input username and password OK', () => {
        const LOGIN_ICON_HOME_SCREEN = '~Login';
        const EMAIL_TEXT_FIELD = '~input-email';
        const PASSWORD_TEXT_FIELD = '~input-password';
        const LOGIN_BUTTON = '~button-LOGIN';

        //Click on Login on HomeScreen
        $(LOGIN_ICON_HOME_SCREEN).click();

        //Fill email text field
        $(EMAIL_TEXT_FIELD).setValue('hykhang@hykhang.com');

        //Fill password text field
        $(PASSWORD_TEXT_FIELD).setValue('hykhangdeptrai');

        //Click login button
        $(LOGIN_BUTTON).click();

        browser.pause(5000)


    })
})