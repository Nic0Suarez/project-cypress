import { Logger } from "../util/logger";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";


// Paso 1: Navegar a la página de inicio.
// Paso 2: Hacer clic en "Sign up" en la barra de navegación.
// Paso 3: Completar todos los campos obligatorios con información válida.
// Paso 4: Hacer clic en "Sign up" para registrar el usuario.
// Paso 5: Verificar que se muestre el mensaje "Sign up successful".

describe(CommonPageData.testSuites.registroYAutentificacion, () => {
    it('Registro de usuario válido', () => {

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.navigateToDemonblaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickSignUp();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida.')
        SignupMethods.insertUsername('sdwa');
        SignupMethods.insertPassword('sdwa');

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickSignup();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful')
        SignupMethods.verifySignUpSucessful();
    });

});