const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView';

class RulesScreen {

    clickOnButtonIconBack() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
        $(ICON_BACK).click();
    }
}

export default new RulesScreen();