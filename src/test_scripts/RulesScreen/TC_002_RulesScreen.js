import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import ProfileScreen from '../../page_objects/ProfileScreen/ProfileScreen';
import RulesScreen from '../../page_objects/ProfileScreen/RulesScreen';


describe('Bottom tab Function', () => {
    it('Login to Home', () => {

        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(5000);
    })

    it('Tab profile tab', () => {
        BottomTab.clickOnProfileTab();

        browser.pause(1000)
    })

    it('Click on Rules', () => {
        ProfileScreen.waitTillDisplayed().clickOnButtonRules();

        browser.pause(2000);

        RulesScreen.clickOnButtonIconBack();

        let currentActivity = browser.getCurrentActivity();

        console.log('***************');
        console.log(currentActivity)
        console.log('***************');

        let expectActivity = currentActivity === '.Home' ? true: false;

        expect(expectActivity).toBe(true);


        browser.pause(5000)

    })

})