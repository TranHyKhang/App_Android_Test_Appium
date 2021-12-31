const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView';

const BUTTON_VIETNAMESE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[1]';
const BUTTON_ENGLISH = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]';

class LanguageScreen {
    waitTillDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
    }

    clickOnIconBack() {
        $(ICON_BACK).click();
    }

    clickOnButtonVietnamese() {
        $(BUTTON_VIETNAMESE).click()
    }
    
    clickOnButtonEnglish() {
        $(BUTTON_ENGLISH).click();
    }
}

export default new LanguageScreen();