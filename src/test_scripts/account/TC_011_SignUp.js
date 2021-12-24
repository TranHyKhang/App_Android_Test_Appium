import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('CLick button without info', () => {
        Login.clickOnButtonSignUp();
        
        SignUp.clickOnSignUpButton();

        browser.pause(5000)
    })
})