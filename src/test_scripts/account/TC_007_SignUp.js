import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('Fill name', () => {
        Login.clickOnButtonSignUp();
        SignUp.setEdtName('Trần Hy Khang');

        browser.pause(5000)
    })
})