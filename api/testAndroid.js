

describe('Learning WebdriveIO API', () => {
    it('Should input username and password OK', () => {
        const driver = require('webdriverio')
        // const LOGIN_ICON_HOME_SCREEN = '~Login';
        // const EMAIL_TEXT_FIELD = '~input-email';
        // const PASSWORD_TEXT_FIELD = '~input-password';
        // const LOGIN_BUTTON = '~button-LOGIN';

        // //Click on Login on HomeScreen
        // $(LOGIN_ICON_HOME_SCREEN).click();

        // //Fill email text field
        // $(EMAIL_TEXT_FIELD).setValue('hykhang@hykhang.com');

        // //Fill password text field
        // $(PASSWORD_TEXT_FIELD).setValue('hykhangdeptrai');

        // //Click login button
        // $(LOGIN_BUTTON).click();
    
        // const edtSDT = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.EditText');
        // const button = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.Button');
        // edtSDT.setValue('12345')
        // button.click()

        // // const act = browser.currentActivity();
        // console.log('*********************');
        // console.log();
        // console.log('*********************');

        browser.saveScreenshot("./api/Api_ScreenShot.png");

        // console.log('*************')
        // console.log(a)
        // console.log('*************')
        browser.pause(5000)


    })
})