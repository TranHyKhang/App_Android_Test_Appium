import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('Fill ID number', () => {
        Login.clickOnButtonSignUp();
        SignUp.setEdtIDNumber('22');

        browser.pause(5000)
    })
})