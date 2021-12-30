const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView';

const BUTTON_EDIT_PROFILE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageButton';

const EDT_NAME = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]';

const EDT_GENDER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[4]';

const EDT_BIRTHDAY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[6]';

const EDT_PHONE_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[8]'

const EDT_ID_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[10]';

const EDT_ADDRESS = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[12]';

class ProfileDetailScreen {
    waitTillDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
        return this;
    }

    //BUTTON EDIT PROFILE
    clickOnButtonEditProfile() {
        $(BUTTON_EDIT_PROFILE).click();
    }

    //EDIT TEXT NAME
    get getEdtName() {
        return $(EDT_NAME).getText();
    }

    //EDIT TEXT GENDER
    get getEdtGender() {
        return $(EDT_GENDER).getText();
    }

    //EDIT TEXT BIRTHDAY
    get getEdtBirthday() {
        return $(EDT_BIRTHDAY).getText();
    }

    //EDIT TEXT PHONE NUMBER
    get getEdtPhoneNumber() {
        return $(EDT_PHONE_NUMBER).getText();
    }

    //EDIT TEXT ID NUMER
    get getEdtIDNumber() {
        return $(EDT_ID_NUMBER).getText();
    }

    //EDIT TEXT ADDRESS
    get getEdtAddress() {
        return $(EDT_ADDRESS).getText();
    }
}

export default new ProfileDetailScreen();