

const buttonConfirmOTP = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button';
const edtOTP = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.EditText';
const labelSDT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]';


class OTP {

    clickOnButtonConfirmOTP() {
        $(buttonConfirmOTP).click()
    }

    get getOTPTextField() {
        $(edtOTP).waitForDisplayed({timeout: 30000})
        return $(edtOTP)
    }

    get getLabelSDT() {
        $(labelSDT).waitForDisplayed({timeout: 30000})
        return $(labelSDT)
    }

    OTPTextField() {
        $(edtOTP).waitForDisplayed({timeout: 30000})
        return this
    }


    setOTPTextField(value) {
        $(edtOTP).setValue(value);
        return this
    }
}

export default new OTP();