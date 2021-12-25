import Login from '../../page_objects/account/Login'
import OTP from '../../page_objects/account/OTP'

describe('Test Home Screen function', () => {
    it('Login to Home', () => {

        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(5000);
        
    })

    it('Check current activity', () => {

        
        let a = browser.getCurrentActivity();
        
        let b = a == '.Home' ? true : false

        expect(b).toBe(true)

        browser.pause(5000);
    })
})