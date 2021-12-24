import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP'

describe('Account Function', () => {
    it('TC_001_Phone_Number_Length', () => {
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();
        expect(OTP.getOTPTextField.isDisplayed()).toBe(true);
        
        browser.pause(5000);
    })
})