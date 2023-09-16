import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const user = 'qweasdzxc12345'
    const pass = 'qweasdzxc12345'

    Logger.stepNumber(1)
    Logger.step('Navegar a Demoblaze page')
    cy.visit('https://www.demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Hacer click el link Login')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Ingresar a la pagina con las credenciales dadas: "${user}/${pass}"`)
    LoginMethods.login(user, pass)

    Logger.verification(`Al ingresar al HomePage debe mostrar "Welcome ${user}" text`)
    cy.get('a#nameofuser').should('contain.text', user)

  })
})