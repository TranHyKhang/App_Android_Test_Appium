const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView[1]';

const BUTTON_INFO = '//android.widget.FrameLayout[@content-desc="Information"]';
const BUTTON_DESC = '//android.widget.FrameLayout[@content-desc="Describe"]';

const ADULTS_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.EditText';
const ADULTS_INCREASE_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.Button[2]';
const ADULTS_DECREASE_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.Button[1]';

const CHILDREN_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText';
const CHILDREN_INCREASE_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[2]';
const CHILDREN_DECREASE_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.Button[1]';

const BOOK_TOUR_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.Button';


class DetailTour {

    waitTillDisplay() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
    }

    //ICON BACK
    get getIconBack() {
        return $(ICON_BACK);
    }

    clickOnIconBack() {
        this.getIconBack.click();
    }

    //BUTTON INFO
    clickOnButtonInfo() {
        $(BUTTON_INFO).click();
        return this;
    }

    //BUTTON DESC
    clickOnButtonDesc() {
        $(BUTTON_DESC).click();
        return this;
    }

    //ADULTS NUMBER
    get getAdultsNumber() {
        return $(ADULTS_NUMBER)
    }

    clickOnButtonAdultsNumberIncrease() {
        $(ADULTS_INCREASE_BUTTON).click();
        return this;
    }

    clickOnButtonAdultsNumberDecrease() {
        $(ADULTS_DECREASE_BUTTON).click();
        return this;
    }

    decreaseAdultsNumber() {
        while(Number(this.getAdultsNumber.getText()) >= 0) {
           this.clickOnButtonAdultsNumberDecrease() 
        }

        return this;
    }

    increaseAdultsNumber() {
        while(Number(this.getAdultsNumber.getText()) < 5) {
            this.clickOnButtonAdultsNumberIncrease() 
        }

        return this;
    }

    checkAdultNumberIsValid() {
        if(Number(this.getAdultsNumber.getText()) > 0) {
            return true;
        } 
        return false
    }

}

export default new DetailTour();