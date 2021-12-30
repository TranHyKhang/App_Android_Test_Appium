import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import EditProfileScreen from '../../page_objects/ProfileScreen/EditProfileScreen';
import ProfileDetailScreen from '../../page_objects/ProfileScreen/ProfileDetailScreen';
import ProfileScreen from '../../page_objects/ProfileScreen/ProfileScreen';


describe('Bottom tab Function', () => {
    it('Login to Home', () => {
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

    })

    it('Tab profile tab and click profile', () => {
        BottomTab.clickOnProfileTab();
        browser.pause(1000)
        
        ProfileScreen.clickOnButtonProfile();

        ProfileDetailScreen.waitTillDisplayed().clickOnButtonEditProfile();

        EditProfileScreen.waitTillDisplayed().clickOnIconBack();

        browser.pause(5000)
    })

})