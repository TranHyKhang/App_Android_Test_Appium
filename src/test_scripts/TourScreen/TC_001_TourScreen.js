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

        /********SWIPE SCREEN VERTICALLY *******/
        const {height} = driver.getWindowSize();
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;

        const anchor = height * anchorPercentage / 100;
        const startPoint = height * startPointPercentage / 100;
        const endPoint = height * endPointPercentage / 100;

        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release',
                options: {

                }
            }
        ])

        /**********************************/

        browser.pause(5000)
    })

})