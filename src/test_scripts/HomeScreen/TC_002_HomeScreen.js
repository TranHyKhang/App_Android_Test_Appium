import Login from '../../page_objects/account/Login'
import OTP from '../../page_objects/account/OTP'
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';

describe('Test Home Screen function', () => {
    it('Login to Home', () => {

        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(5000);
        
    })

    it('Click icon search and check current activity', () => {

        HomeScreen.clickOnIconSearch();

        let currentActivity = browser.getCurrentActivity();

        let expectActivity = currentActivity == '.Search' ? true : false;

        expect(expectActivity).toBe(true);

        browser.pause(5000);
    })
})