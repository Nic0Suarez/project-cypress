import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { cartElements } from "./cart.elements";

export class cartMethods {

    static clickOnDeleteLink(productName) {
        cartElements.links.delete(productName).click();
    }
    static verifyProductAdded(productName) {
        cartElements.links.delete(productName).should('be.visible');
    }
    static verifyCartIsShown() {
        cy.url().should('include', 'cart.html');
    }
    static clickOnPlaceOrderButton() {
        cartElements.buttons.placeOrder.click();
    }
    static deleteProducts() {
        cy.get('a[onclick*="deleteItem"]').each(link => {
            link.click();
            cy.wait(2000)
        })
    }
    static clearCart(username, password) {
        CommonPageMethods.navigateToDemonblaze();
        CommonPageMethods.clickLogOut();
        CommonPageMethods.clickHome();
        CommonPageMethods.clickLogin();
        LoginMethods.login(username, password);
        CommonPageMethods.clickCart();
        this.deleteProducts();
    }
}