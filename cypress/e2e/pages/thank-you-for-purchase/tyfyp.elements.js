export class ThankYouForYourPurchaseElements {

    static get buttons() {
        return {
            get ok() {
                return cy.contains('button', 'ok');
            }
        };
    }

    static get icons() {
        return {
            get greencheck() {
                return cy.get('div.sa-placeholder');
            }
        };
    }
}