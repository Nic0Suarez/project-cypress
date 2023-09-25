import { CommonPageMethods } from "../common-page/common-page.methods";
import { productDetailsElements } from "./product-details.elements";

export class productDetailsMethods {

    static clickOnAddToCartButton() {
        productDetailsElements.buttons.addToCart.click();
    }
    static verifyProductDetailsDisplayed() {
        productDetailsElements.buttons.addToCart.should('be.visible');
    }
    static verifyProductAddMessage() {
        CommonPageMethods.verifyAlert('Product added')
    }
}