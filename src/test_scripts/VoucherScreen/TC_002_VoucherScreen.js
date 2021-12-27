import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';
import VoucherScreen from '../../page_objects/VoucherScreen/VoucherScreen';



describe('Bottom tab Function', () => {
    it('Login to Home', () => {

    
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

    })

    it('Tab Voucher tab and click voucher item', () => {
        BottomTab.clickOnVoucherTab();

        VoucherScreen.clickOnVoucherItem();

        let currentActivity = browser.getCurrentActivity();

        console.log('***************');
        console.log(currentActivity)
        console.log('***************');

        let expectActivity = currentActivity === '.DetailKhuyenMaiActivity' ? true : false

        expect(expectActivity).toBe(true);

        browser.pause(5000)
    })

})