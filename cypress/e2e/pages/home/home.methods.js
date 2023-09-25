import { HomeElements } from "./home.elements";

export class HomeMethods {

    static clickOnPhonesOptions() {
        HomeElements.categoriesMenu.phones.click();
    }
    static clickOnLaptosOptions() {
        HomeElements.categoriesMenu.laptos.click();
    }
    static clickOnMonitorsOptions() {
        HomeElements.categoriesMenu.monitors.click();
    }
    static clickOnProductsLink(productName) {
        HomeElements.product(productName).click();
    }
    static verifyProductDisplay(productName) {
        HomeElements.product(productName).should('be.visible')
    }
}