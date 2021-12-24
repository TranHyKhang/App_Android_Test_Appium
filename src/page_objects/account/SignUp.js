
const edtName = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[1]';

const edtBirthday = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[2]';
const edtSelectMonth = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[1]/android.widget.EditText';
const edtSelectDay = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[2]/android.widget.EditText';
const edtSelectYear = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[3]/android.widget.EditText';
const btnSelectMonth = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[1]/android.widget.Button[1]'
const btnSelectDay = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[2]/android.widget.Button[1]'
const btnSelectYear = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[3]/android.widget.Button[1]'
const btnSelectDone = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'
const btnCancelSelectBirhtday = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[1]'

const rdBtnMale = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RadioGroup/android.widget.RadioButton[1]';
const rdBtnFemale = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RadioGroup/android.widget.RadioButton[2]';

const edtPhoneNumber = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[3]';
const edtIDNumber = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[4]';
const edtAddress = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText[5]';
const btnSignUp = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button';

class SignUp {

    //EDIT TEXT USER NAME
    get getEdtName() {
        $(edtName).waitForDisplayed({timeout: 5000})
        return $(edtName)
    }

    setEdtName(value) {
        this.getEdtName.setValue(value);
        return this;
    }

    //EDIT USER BIRTHDAY
    get getEdtBirthday() {
        $(edtBirthday).waitForDisplayed({timeout: 5000});
        return $(edtBirthday)
    }


    clickOnEdtBirthday() {
        this.getEdtBirthday.click();
        return this;
    }

    get getEdtSelectMonth() {
        $(edtSelectMonth).waitForDisplayed({timeout: 5000});
        return $(edtSelectMonth)
    }

    get getBtnSelectMonth() {
        $(btnSelectMonth).waitForDisplayed({timeout: 5000});
        return $(btnSelectMonth)
    }

    setEdtSelectMonth(value) {
        while(this.getEdtSelectMonth.getText() !== value) {
            this.getBtnSelectMonth.click()
        }
        return this;
    }

    get getEdtSelectDay() {
        $(edtSelectDay).waitForDisplayed({timeout: 5000});
        return $(edtSelectDay)
    }

    get getBtnSelectDay() {
        $(btnSelectDay).waitForDisplayed({timeout: 5000});
        return $(btnSelectDay)
    }

    setEdtSelectDay(value) {
        while(this.getEdtSelectDay.getText() !== value) {
            this.getBtnSelectDay.click()
        }
        return this;

    }

    get getEdtSelectYear() {
        $(edtSelectYear).waitForDisplayed({timeout: 5000});
        return $(edtSelectYear)
    }

    get getBtnSelectYear() {
        $(btnSelectYear).waitForDisplayed({timeout: 5000});
        return $(btnSelectYear)
    }

    setEdtSelectYear(value) {
        while(this.getEdtSelectYear.getText() !== value) {
            this.getBtnSelectYear.click()
        }
        return this;

    }

    clickOnButtonSelectDone() {
        $(btnSelectDone).click();
        return this
    }

    clickOnButtonCancel() {
        $(btnCancelSelectBirhtday).click();
    }

    //DADIO BUTTON USER SEX
    get getRdBtnMale() {
        $(rdBtnMale).waitForDisplayed({timeout: 5000});
        return $(rdBtnMale)
    }

    clickOnRadioButtonMale() {
        this.getRdBtnMale.click();
        return this;
    }

    get getRdBtnFemale() {
        $(rdBtnFemale).waitForDisplayed({timeout: 5000});
        return $(rdBtnFemale)
    }

    clickOnRadioButtonFemale() {
        this.getRdBtnFemale.click();
        return this;
    }

    //EDIT USER PHONE NUMBER
    get getEdtPhoneNumber() {
        $(edtPhoneNumber).waitForDisplayed({timeout: 5000});
        return $(edtPhoneNumber)
    }

    setEdtPhoneNumber(value) {
        this.getEdtPhoneNumber.setValue(value);
        return this;
    }

    //EDIT TEXT USER ID NUMBER
    get getEdtIDNumber() {
        $(edtIDNumber).waitForDisplayed({timeout: 5000});
        return $(edtIDNumber)
    }

    setEdtIDNumber(value) {
        this.getEdtIDNumber.setValue(value)
        return this;
    }


    //EDIT TEXT USER ADDRESS
    get getEdtAddress() {
        $(edtAddress).waitForDisplayed({timeout: 5000});
        return $(edtAddress)
    }

    setEdtAddress(value) {
        this.getEdtAddress.setValue(value);
        return this
    }


    //BUTTON SIGN UP
    get getBtnSignUp() {
        $(btnSignUp).waitForDisplayed({timeout: 5000});
        return $(btnSignUp)
    }

    clickOnSignUpButton() {
        this.getBtnSignUp.click()
    }

}

export default new SignUp();