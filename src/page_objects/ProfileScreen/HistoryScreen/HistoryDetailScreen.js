const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView';

const BUTTON_CANCEL = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button';

class HistoryDetailScreen {
    waitTillDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
        return this;
    }

    clickOnButtonBack() {
        $(ICON_BACK).click();
    }

    clickOnButtonCancel() {
        $(BUTTON_CANCEL).click();
    }
}

export default new HistoryDetailScreen();