const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView';

const EDT_NAME = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[1]';
const EDT_GENDER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[2]';
const EDT_BIRTHDAY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[3]';
const EDT_PHONE_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[5]';
const EDT_ID_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[4]';
const EDT_ADDRESS = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[3]';

const BUTTON_IMAGE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.ImageView';
const SELECT_IMAGE = '//android.widget.LinearLayout[@content-desc="default-avatar-profile-icon-vector-social-media-user-portrait-176256935-1.jpg, 13.19 kB, Dec 29"]/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.ImageView[1]';
const BUTTON_UPDATE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button';

class EditProfileScreen {

    waitTillDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
        return this;
    }

    clickOnIconBack() {
        $(ICON_BACK).click();
    }

    setEdtName(value) {
        $(EDT_NAME).setValue(value);
        return this
    }

    setEdtGender(value) {
        $(EDT_GENDER).setValue(value);
        return this;
    }

    setEdtBirthday(value) {
        $(EDT_BIRTHDAY).setValue(value);
        return this;
    }

    setEdtIDNumber(value) {
        $(EDT_ID_NUMBER).setValue(value);
        return this;
    } 

    setEdtAddress(value) {
        $(EDT_ADDRESS).setValue(value);
        return this;
    }

    clickOnButtonUpdate() {
        $(BUTTON_UPDATE).click();
    }

    updateImage() {
        $(BUTTON_IMAGE).click();

        $(SELECT_IMAGE).waitForDisplayed({timeout: 5000});
        $(SELECT_IMAGE).click();
        return this;
    }
}

export default new EditProfileScreen();