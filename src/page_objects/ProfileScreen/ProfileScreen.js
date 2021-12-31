const BUTTON_PROFILE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[2]';

const BUTTON_LOVED = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TableLayout/android.widget.TableRow[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.ImageView';
const BUTTON_HISTORY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TableLayout/android.widget.TableRow[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.ImageView';
const BUTTON_LANGUAGE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TableLayout/android.widget.TableRow[2]/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.ImageView';
const BUTTON_RULES = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TableLayout/android.widget.TableRow[2]/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.ImageView';
const BUTTON_CONTACT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TableLayout/android.widget.TableRow[3]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ImageView';

class ProfileScreen {
    waitTillDisplayed() {
        $(BUTTON_PROFILE).waitForDisplayed({timeout: 5000});
        return this;
    }

    clickOnButtonProfile() {
        $(BUTTON_PROFILE).click();
    }

    clickOnButtonLoved() {
        $(BUTTON_LOVED).click();
    }

    clickOnButtonLanguage() {
        $(BUTTON_LANGUAGE).click()
    }

    clickOnButtonHistory() {
        $(BUTTON_HISTORY).click();
    }

    clickOnButtonRules() {
        $(BUTTON_RULES).click();
    }

    clickOnButtonContact() {
        $(BUTTON_CONTACT).click();
    }
}

export default new ProfileScreen();