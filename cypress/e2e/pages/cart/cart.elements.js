export class cartElements {

    static get buttons() {
        return {
            get placeOrder() {
                return cy.get('button[data-toggle="modal"]')
            }
        };
    }
    ////td[text()="Nexus 6"]/ancestor::tr//a <- xpath convertir a element de cypress
    static get links() {
        return {
            delete(productName) {
                return cy.contains('td', productName).closest('tr').find('a')
            }
        }
    }
}