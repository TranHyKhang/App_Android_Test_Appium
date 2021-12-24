import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('CLick on female radio button', () => {
        Login.clickOnButtonSignUp();
        
        SignUp.clickOnRadioButtonFemale();


        browser.pause(5000)
    })
})