import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import HistoryDetailScreen from '../../page_objects/ProfileScreen/HistoryScreen/HistoryDetailScreen';
import HistoryScreen from '../../page_objects/ProfileScreen/HistoryScreen/HistoryScreen';
import LoveScreen from '../../page_objects/ProfileScreen/LoveScreen';
import ProfileScreen from '../../page_objects/ProfileScreen/ProfileScreen';


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

    it('Click on History', () => {
        ProfileScreen.waitTillDisplayed().clickOnButtonHistory();

        browser.pause(2000);

        HistoryScreen.clickOnHistoryItem();

        browser.pause(2000);

        HistoryDetailScreen.clickOnButtonBack();

        let currentActivity = browser.getCurrentActivity();

        console.log('***************');
        console.log(currentActivity)
        console.log('***************');

        let expectActivity = currentActivity === '.History' ? true: false;

        expect(expectActivity).toBe(true);

        browser.pause(5000)

    })

})