import { ThankYouForYourPurchaseElements } from "./tyfyp.elements";

export class ThankYouForYourPurchaseMethods {
    static clickOnOkButton() {
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    verifyGreenCheck() {
        ThankYouForYourPurchaseElements.icons.greencheck.should('exist');
    }
}