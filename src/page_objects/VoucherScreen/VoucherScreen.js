//VOUCHER_SCREEN
const VOUCHER_ITEM = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]';

//VOUCHER_DETAIL_SCREEN
const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView';
const VOUCHER_CODE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]';

class VoucherScreen {

    //VOUCHER SCREEN
    clickOnVoucherItem() {
        $(VOUCHER_ITEM).waitForDisplayed({timeout: 5000});
        $(VOUCHER_ITEM).click();
    }

    //VOUCHER DETAIL SCREEN
    waitTillVoucherDetailScreenDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
    }

    clickOnIconBack() {
        $(ICON_BACK).click();
    }

    get getVoucherCode() {
        return $(VOUCHER_CODE).getText();
    }
}

export default new VoucherScreen();