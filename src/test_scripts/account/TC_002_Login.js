import Login from '../../page_objects/account/Login';

describe('Account Function', () => {
    it('TC_001_Phone_Number_Is_A_String', () => {

    
        Login.setPhoneNumberTextField('abc').clickOnButtonLogin();
        expect(Login.phoneNumberIsValid(Login.phoneNumberTextField.getText())).toBe(true);


        browser.pause(5000);
    })
})