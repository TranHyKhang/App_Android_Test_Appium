import Login from '../../page_objects/account/Login'
import OTP from '../../page_objects/account/OTP'
import DetailTour from '../../page_objects/DetailTour/DetailTour';
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';

describe('Test Detail Tour function', () => {
    it('Login to Home', () => {

        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(2000);
        
    })

    it('Swipe vertically', () => {

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

    })

    it('Click tour item', () => {
        HomeScreen.clickOnImageListTourItem();
        
        browser.pause(2000);

    })

    it('CLick on book button with negative adult and 2 children', () => {
        

        DetailTour.decreaseAdultsNumberToNegative().increaseChildrenNumber().clickOnButtonBookTour();

        let curruntActivity = browser.getCurrentActivity();

        let expectActivity = curruntActivity === '.InfoTour' ? true :false;

        expect(expectActivity).toBe(true);

        browser.pause(5000)
    })
})