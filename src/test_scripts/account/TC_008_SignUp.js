import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('Fill phone number', () => {
        Login.clickOnButtonSignUp();
        SignUp.setEdtPhoneNumber('0933308108');

        browser.pause(5000)
    })
})