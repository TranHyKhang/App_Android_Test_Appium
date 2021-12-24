import Login from '../../page_objects/account/Login';
import OTP from '../../page_objects/account/OTP';
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';

describe('Account Function', () => {
    it('TC_001_Login', () => {

    
        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();
        
    
        let a = HomeScreen.homeScreenLabel.getText();

        console.log("***************************");
        console.log(a);
        console.log("***************************");

        browser.pause(5000);
    })

})