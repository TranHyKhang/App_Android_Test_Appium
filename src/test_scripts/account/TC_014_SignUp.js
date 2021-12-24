import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('CLick on male radio button', () => {
        Login.clickOnButtonSignUp();
        
        SignUp.clickOnRadioButtonMale();


        browser.pause(5000)
    })
})