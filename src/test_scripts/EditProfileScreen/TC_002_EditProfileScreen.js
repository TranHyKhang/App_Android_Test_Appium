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

    it('Update profile without change', () => {
        BottomTab.clickOnProfileTab();
        browser.pause(1000)
        
        ProfileScreen.clickOnButtonProfile();

        ProfileDetailScreen.waitTillDisplayed().clickOnButtonEditProfile();

        EditProfileScreen.waitTillDisplayed();

        
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

        browser.pause(1000);
    })

    it('Click button update without change', () => {
        

        EditProfileScreen.clickOnButtonUpdate();

        let currentActivity = browser.getCurrentActivity();

        console.log('**********************')
        console.log(currentActivity)
        console.log('**********************')

        expectActivity = currentActivity === '.UpdateProfile' ? false : true;

        expect(expectActivity).toBe(true);
 
        browser.pause(5000)
    })

})