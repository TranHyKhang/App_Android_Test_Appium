import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('Fill Address', () => {
        Login.clickOnButtonSignUp();
        SignUp.setEdtAddress('ABC');

        browser.pause(5000)
    })
})