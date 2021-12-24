import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('CLick button cancel in birthday select', () => {
        Login.clickOnButtonSignUp();
        
        SignUp
            .clickOnButtonCancel();


        browser.pause(5000)
    })
})