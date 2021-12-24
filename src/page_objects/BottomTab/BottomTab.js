
//BOTTOM TAB
const VOUCHER_TAB = '//android.widget.FrameLayout[@content-desc="Sale"]';

const LIST_TOUR_TAB = '//android.widget.FrameLayout[@content-desc="Tour"]';

const NEWS_TAB = '//android.widget.FrameLayout[@content-desc="News"]';

const PROFILE_TAB = '//android.widget.FrameLayout[@content-desc="Profile"]';

class BottomTab {
    get getVoucherTab() {
        $(VOUCHER_TAB).waitForDisplayed({timeout: 20000})
        return $(VOUCHER_TAB);
    }

    clickOnVoucherTab() {
        this.getVoucherTab.click();
        return this;
    }

    get getListTourTab() {
        $(LIST_TOUR_TAB).waitForDisplayed({timeout: 20000})
        return $(LIST_TOUR_TAB);
    }

    clickOnListTourTab() {
        this.getListTourTab.click();
        return this;
    }

    get getNewsTab() {
        $(NEWS_TAB).waitForDisplayed({timeout: 20000});
        return $(NEWS_TAB);
    }

    clickOnNewsTab() {
        this.getNewsTab.click();
        return this;
    }

    get getProfileTab() {
        $(PROFILE_TAB).waitForDisplayed({timeout: 20000});
        return $(PROFILE_TAB);
    }

    clickOnProfileTab() {
        this.getProfileTab.click();
        return this;
    }
}

export default new BottomTab();