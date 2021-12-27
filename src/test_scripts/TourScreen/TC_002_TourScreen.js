import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import BottomTab from '../../page_objects/BottomTab/BottomTab';
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';


describe('Bottom tab Function', () => {
    it('Login to Home', () => {

    
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(2000);
    })

    it('Tab list tour tab', () => {
        BottomTab.clickOnListTourTab();

        browser.pause(1000)

        $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView')
            .click();

        browser.pause(5000)
    })

})