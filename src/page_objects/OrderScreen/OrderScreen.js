const ICON_BACK = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView';

const TOUR_NAME = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView[2]';

const PROMOTION_TEXT_FIELD = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[6]/android.widget.EditText';
const PROMOTION_APPLY_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[6]/android.widget.Button';

const ADULTS_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[7]/android.widget.TextView[2]';
const ADULTS_TOTAL_MONEY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[7]/android.widget.TextView[3]';

const CHILDREN_NUMBER = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[8]/android.widget.TextView[2]';
const CHILDREN_TOTAL_MONEY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[8]/android.widget.TextView[3]';

const TOTAL_MONEY = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[9]/android.widget.TextView[2]';

const DISCOUNT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[10]/android.widget.TextView[2]';

const TOTAL_PAYMENT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[11]/android.widget.TextView[2]';

const PAYMENT_BUTTON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button';

class OrderScreen {

    waitTillDisplayed() {
        $(ICON_BACK).waitForDisplayed({timeout: 5000});
    }

    //ICON BACK
    clickOnIconBack() {
        $(ICON_BACK).click();
    }

    //TOUR NAME
    get getTourName() {
        return $(TOUR_NAME).getText();
    }

    //PROMOTION
    get getPromotionTextField() {
        return $(PROMOTION_TEXT_FIELD);
    }

    setPromotionTextField(value) {
        this.getPromotionTextField.setValue(value);
        return this;
    }

    clickOnButtonApplyPromotion() {
        $(PROMOTION_APPLY_BUTTON).click();
        return this;
    }

    //ADULTS
    get getAdultsNumber() {
        return $(ADULTS_NUMBER).getText();
    }

    get getAdultsTotalMoney() {
        return $(ADULTS_TOTAL_MONEY).getText().replace(/,/g,'');
    }

    checkAdultTotalMoneyIsValid(price) {

        let currentMoney = this.getAdultsTotalMoney;

        let numberOfAdults = this.getAdultsNumber;

        let expectTotalMoney = Number(price) * Number(numberOfAdults);

        if(Number(currentMoney) === expectTotalMoney) {
            return true;
        }

        return false;
    }

    //CHILDRENS
    get getChildrenNumber() {
        return $(CHILDREN_NUMBER).getText();
    }

    get getChildrenTotalMoney() {
        return $(CHILDREN_TOTAL_MONEY).getText().replace(/,/g,'');
    }

    checkChildrenTotalMoneyIsValid(price) {
        
        let currentMoney = Number(this.getChildrenTotalMoney);

        let numberOfChildren = Number(this.getChildrenNumber);

        let expectTotalMoney = (Number(price) / 2) * numberOfChildren;

        if(currentMoney === expectTotalMoney) {
            return true;
        }
        return false;
    }

    //TOTAL MONEY
    get getTotalMoney() {
        return $(TOTAL_MONEY).getText().replace(/,/g,'');
    }

    checkTotalMoneyIsValid(price) {

        let numberOfAdults = Number(this.getAdultsNumber);

        let numberOfChildren = Number(this.getChildrenNumber);

        let totalMoney = (Number(price) * numberOfAdults) + ((Number(price) / 2) * numberOfChildren);

        let currentTotalMoney = Number(this.getTotalMoney);

        if(totalMoney === currentTotalMoney) {
            return true;
        }
        return false;
    }

    //Total payment
    get getTotalPayment() {
        return $(TOTAL_PAYMENT).getText().replace(/,/g,'');
    }

    get getDiscount() {
        return $(DISCOUNT).getText().replace(/,/g,'');
    }

    checkTotalPaymentIsValid(price) {

        let numberOfAdults = Number(this.getAdultsNumber);

        let numberOfChildren = Number(this.getChildrenNumber);

        let currentTotalPayment = Number(this.getTotalPayment);

        let totalMoney = (Number(price) * numberOfAdults) + ((Number(price) / 2) * numberOfChildren);

        let discount = Number(this.getDiscount) !== 0 
            ? 
            Number(this.getDiscount.substring(0, this.getDiscount.length - 1))
            :
            0

        let totalPayment = totalMoney - (totalMoney * discount / 100);

        console.log('********************')
        console.log(totalPayment)
        console.log(currentTotalPayment)
        console.log('********************')

        if(totalPayment === currentTotalPayment) {
            return true;
        } 

        return false;

    }

    //PAYMENT BUTTON
    clickOnPaymentButton() {
        $(PAYMENT_BUTTON).click();
    }

}

export default new OrderScreen();