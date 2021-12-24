import Login from '../../page_objects/account/Login';

describe('Account Function', () => {
    it('TC_004_Phone_Number_Length', () => {

    
        Login.setPhoneNumberTextField('12345678910').clickOnButtonLogin();
        expect(Login.phoneNumberTextField.getText().length).toBe(10);

        browser.pause(5000);
    })
})