import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('Select user birthday', () => {
        Login.clickOnButtonSignUp();
        
        SignUp
            .clickOnEdtBirthday()
            .setEdtSelectMonth('Mar')
            .setEdtSelectDay('08')
            .setEdtSelectYear('2000')
            .clickOnButtonSelectDone();


        browser.pause(5000)
    })
})