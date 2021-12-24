import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';


describe('Bottom tab Function', () => {
    it('Login to Home', () => {

    
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(5000);
    })

    it('Tab Voucher tab', () => {
        BottomTab.clickOnVoucherTab();

        browser.pause(5000)
    })

})