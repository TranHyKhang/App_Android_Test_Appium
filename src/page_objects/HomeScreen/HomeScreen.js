const HOME_SCREEN_LABEL = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView'

const ICON_NOTIFY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView[2]';

const ICON_SEARCH = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView[1]';

const IMAGE_LIST_TOUR_ITEM = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView';

const HEART_LIST_TOUR_ITEM = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ImageView';



class HomeScreen {
    get homeScreenLabel() {
        $(HOME_SCREEN_LABEL).waitForDisplayed({timeout: 20000});
        return $(HOME_SCREEN_LABEL);
    }

    //ICON NOTIFY
    get getIconNotify() {
        $(ICON_NOTIFY).waitForDisplayed({timeout: 20000});
        return $(ICON_NOTIFY);
    }

    clickOnIconNotify() {
        this.getIconNotify.click();
        return this;
    }

    //ICON SEARCH
    get getIconSearch() {
        $(ICON_SEARCH).waitForDisplayed({timeout: 20000});
        return $(ICON_SEARCH);
    }

    clickOnIconSearch() {
        this.getIconSearch.click();
        return this;
    }

    //IMAGE LIST TOUR ITEM
    get getImageListTourItem() {
        $(IMAGE_LIST_TOUR_ITEM).waitForDisplayed({timeout: 20000});
        return $(IMAGE_LIST_TOUR_ITEM);
    }

    clickOnImageListTourItem() {
        this.getImageListTourItem.click();
    }

    //LIST TOUR ITEM HEART ICON
    get getHeartListTourItem() {
        $(HEART_LIST_TOUR_ITEM).waitForDisplayed({timeout: 20000});
        return $(HEART_LIST_TOUR_ITEM);
    }

    clickOnHeartListTourItem() {
        this.getHeartListTourItem.click();
    }

}

export default new HomeScreen();