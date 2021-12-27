import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import ProfileScreen from '../../page_objects/ProfileScreen/ProfileScreen';


describe('Bottom tab Function', () => {
    it('Login to Home', () => {
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

    })

    it('Tab profile tab and click history', () => {
        BottomTab.clickOnProfileTab();
        browser.pause(1000)
        
        ProfileScreen.clickOnButtonHistory();

        browser.pause(5000)
    })

})