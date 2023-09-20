import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {

    static navigateToDemonblaze() {
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }
    static clickHome() {
        CommonPageElements.topMenu.home.click();
    }
    static clickContact() {
        CommonPageElements.topMenu.contact.click();
    }
    static clickAboutUs() {
        CommonPageElements.topMenu.aboutUs.click();
    }
    static clickCart() {
        CommonPageElements.topMenu.cart.click();
    }
    static clickLogin() {
        CommonPageElements.topMenu.login.click();
    }
    static clickSignUp() {
        CommonPageElements.topMenu.signup.click();
    }
    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
}    