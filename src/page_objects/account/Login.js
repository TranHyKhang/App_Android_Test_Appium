
const buttonLogin = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.Button';
const edtLogin = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.EditText';
const btnSignUpNavigate = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView[2]';
class Login {
    get phoneNumberTextField() {
        $(edtLogin)
            .waitForDisplayed({timeout: 5000})
        return $(edtLogin);
    }

    setPhoneNumberTextField(value) {
        this.phoneNumberTextField.setValue(value)
        return this
    }


    clickOnButtonLogin() {
        $(buttonLogin).click()
    }

    clickOnButtonSignUp() {
        $(btnSignUpNavigate).click();
    }

    phoneNumberIsValid(value) {
        let rs = false;
        if(Number(value) > 0) {
            rs = true
            if(value.length == 10) {
                rs = true
            } else {
                rs = false
            }
        } else {
            rs = false
        }

        return rs
    }
    
}

export default new Login();