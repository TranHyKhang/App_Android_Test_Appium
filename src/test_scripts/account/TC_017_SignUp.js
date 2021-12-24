import Login from '../../page_objects/account/Login';
import SignUp from '../../page_objects/account/SignUp';

describe('TC_007_SignUp', () => {
    it('fill all text field', () => {
        Login.clickOnButtonSignUp();
        
        SignUp
            .setEdtName('Trần Hy Khang')
            .clickOnRadioButtonMale()
            .clickOnEdtBirthday()
            // .setEdtSelectMonth('Mar')
            // .setEdtSelectDay('08')
            // .setEdtSelectYear('2000')
            .clickOnButtonSelectDone()
            .setEdtPhoneNumber('0933308108')
            .setEdtIDNumber('123456789')
            .setEdtAddress('ABCDEF')

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

        SignUp.clickOnSignUpButton()

        browser.pause(5000)
    })
})