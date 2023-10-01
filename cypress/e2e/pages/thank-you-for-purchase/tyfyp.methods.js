import { ThankYouForYourPurchaseElements } from "./tyfyp.elements";

export class ThankYouForYourPurchaseMethods {

    static clickOnOkButton() {
        cy.wait(1000)
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheck() {
        ThankYouForYourPurchaseElements.icons.greencheck.should('exist');
    }
}