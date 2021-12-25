import Login from '../../page_objects/account/Login'
import OTP from '../../page_objects/account/OTP'
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';

describe('Test Home Screen function', () => {
    it('Login to Home', () => {

        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(1000);
        
    })

    it('Swipe horizontally', () => {

        /********SWIPE SCREEN HORIZONTALLY *******/
        const {height,width} = driver.getWindowSize();
        const anchorPercentage = 40;
        const startPointPercentage = 90;
        const endPointPercentage = 10;

        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPointPercentage / 100;
        const endPoint = width * endPointPercentage / 100;

        for(let x = 0; x < 5; x++) 
        {
            driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: startPoint,
                        y: anchor
                    }
                },
                {
                    action: 'wait',
                    options: {
                        ms: 500
                    }
                },
                {
                    action: 'moveTo',
                    options: {
                        x: endPoint,
                        y: anchor
                    }
                },
                {
                    action: 'release',
                    options: {

                    }
                }
            ])
        }
        /**********************************/

        browser.pause(5000);
    })
})