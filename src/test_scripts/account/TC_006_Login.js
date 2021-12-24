import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';

describe('Account Function', () => {
    it('TC_006_Phone_Number_Display_Matched', () => {

    
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();
        let phone = Login.phoneNumberTextField.getText();

        let phoneMatched = OTP.getLabelSDT.getText();

        expect(phoneMatched).toBe(phone)

        browser.pause(5000);
    })
})