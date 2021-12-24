import Login from '../../page_objects/account/Login';

describe('Account Function', () => {
    it('TC_005_Phone_Number_Length', () => {

    
        Login.setPhoneNumberTextField('123456789').clickOnButtonLogin();
        expect(Login.phoneNumberTextField.getText().length).toBe(10);

        browser.pause(5000);
    })
})