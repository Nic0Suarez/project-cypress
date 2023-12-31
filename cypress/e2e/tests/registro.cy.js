import { Logger } from "../util/logger";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { LoginData } from "../pages/login/login.data";

const user = CommonPageMethods.userRandomGenerator();
const password = CommonPageMethods.userRandomGenerator(7);
const userExist = LoginData.validCredentials.username;

describe(CommonPageData.testSuites.registro, () => {
    it('Registro de usuario válido ', () => {

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.navigateToDemonblaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickSignUp();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida.')
        SignupMethods.insertUsername(user);
        SignupMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickSignup();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful')
        SignupMethods.verifySignUpSucessful();
    });

    it('Registro de usuario inválido', () => {

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.navigateToDemonblaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickSignUp();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información inválida.')
        SignupMethods.insertUsername(userExist);
        SignupMethods.insertPassword(userExist);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickSignup();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre el mensaje "This user already exist."')
        SignupMethods.verifyUserAlreadyExist();
    });
});