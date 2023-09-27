import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods {

    static insertName(name) {
        PlaceOrderElements.textboxes.name.invoke('val', name);
    }
    static insertCountry(country) {
        PlaceOrderElements.textboxes.country.invoke('val', country);
    }
    static insertCity(city) {
        PlaceOrderElements.textboxes.city.invoke('val', city);
    }
    static insertCreditCard(creditcard) {
        PlaceOrderElements.textboxes.creditcard.invoke('val', creditcard);
    }
    static insertMonth(month) {
        PlaceOrderElements.textboxes.month.invoke('val', month);
    }
    static insertYear(year) {
        PlaceOrderElements.textboxes.year.invoke('val', year);
    }
    static clickOnButtonClose() {
        PlaceOrderElements.buttons.close.click();
    }
    static clickOnButttonPurchase() {
        PlaceOrderElements.buttons.purchase.click();
    }
    static insertPlaceOrderInformation(data) {
        this.insertName(data.name);
        this.insertCountry(data.country);
        this.insertCity(data.city);
        this.insertCreditCard(data.creditcard);
        this.insertMonth(data.month);
        this.insertYear(data.year);
    }
}