import Login from '../../page_objects/account/Login'
import OTP from '../../page_objects/account/OTP'
import DetailTour from '../../page_objects/DetailTour/DetailTour';
import HomeScreen from '../../page_objects/HomeScreen/HomeScreen';
import OrderScreen from '../../page_objects/OrderScreen/OrderScreen';
import VoucherScreen from '../../page_objects/VoucherScreen/VoucherScreen';
import BottomTab from '../../page_objects/BottomTab/BottomTab';

describe('Test Detail Tour function', () => {
    it('Login to Home', () => {

        Login.setPhoneNumberTextField('0933308108').clickOnButtonLogin();

        OTP.OTPTextField().setOTPTextField('000000').clickOnButtonConfirmOTP();

        browser.pause(2000);
        
    })

    it('Check total payment with another adults number and children number with discount', () => {

        BottomTab.clickOnVoucherTab();

        VoucherScreen.clickOnVoucherItem();

        let voucherCode = VoucherScreen.getVoucherCode;

        VoucherScreen.clickOnIconBack();

        BottomTab.clickOnHomeTab();

        browser.pause(2000);

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

        HomeScreen.clickOnImageListTourItem();
        
        let tourPrice = Number(DetailTour.getTourPrice);

        DetailTour.increaseChildrenNumber().increaseAdultsNumber().clickOnButtonBookTour();

        OrderScreen.setPromotionTextField(voucherCode).clickOnButtonApplyPromotion();

        let rs = OrderScreen.checkTotalPaymentIsValid(tourPrice);

        expect(rs).toBe(true);

        browser.pause(5000)
    })
})