import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {

    static navigateToDemonblaze() {
        cy.clearAllCookies();
        cy.clearLocalStorage();
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
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }
    static clickLogin() {
        CommonPageElements.topMenu.login.click();
    }
    static clickSignUp() {
        CommonPageElements.topMenu.signup.click();
    }
    static clickLogOut() {
        cy.get('body').then($body => {
            if ($body.find('#logout2[style="display: block;"]').length > 0) {
                CommonPageElements.topMenu.logOut.click();
            }
        })
    }
    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
    static userRandomGenerator(length = 10) {
        let result = "";
        const characters = 'abcdefghijkmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let count = 0;
        while (count < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            count++;
        }
        return result;
    }

    static verifySignedUser(username) {
        CommonPageElements.signedUser.should('have.text', `Welcome ${username}`)
    }
}    