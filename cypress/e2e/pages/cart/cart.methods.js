import { cartElements } from "./cart.elements";

export class cartMethods {

    static clickOnDeleteLink(productName) {
        cartElements.links.delete(productName).click();
    }
    static verifyProductAdded(productName) {
        cartElements.links.delete(productName).should('be.visible');
    }
}