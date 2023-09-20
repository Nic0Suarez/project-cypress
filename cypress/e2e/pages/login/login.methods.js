import { Logger } from '../../util/logger'
import { CommonPageMethods } from '../common-page/common-page.methods'
import { LoginElements } from './login.elements'


export class LoginMethods {
    static insertUsername(username) {
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password) {
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton() {
        LoginElements.buttons.login.click()
    }

    static login(username, password) {

        Logger.subStep('Insertar username')
        this.insertUsername(username)

        Logger.subStep('Insertar password')
        this.insertPassword(password)

        Logger.subStep('Click en el Boton de login')
        this.clickOnLoginButton()
    }

    static verifyWrongPassword() {
        CommonPageMethods.verifyAlert('Wrong password.')
    }

    static verifyWrongUser() {
        CommonPageMethods.verifyAlert('User does not exist.')
    }
}