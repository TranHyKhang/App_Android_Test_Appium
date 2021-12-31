
const HISTORY_ITEM = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout';

const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView'

class HistoryScreen {
    waitTillDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000})
    }

    clickOnHistoryItem() {
        $(HISTORY_ITEM).click();
    }

    clickOnIconBack() {
        $(ICON_BACK).click();
    }
}

export default new HistoryScreen();