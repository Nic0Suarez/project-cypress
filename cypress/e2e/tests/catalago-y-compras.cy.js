import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageElements } from "../pages/common-page/common-page.elements";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";

import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";

import { HomeMethods } from "../pages/home/home.methods";

import { Logger } from "../util/logger";

const user = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompras, () => {
    it('Navegación por categorías', () => {

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a DemoBlaze')
        CommonPageMethods.navigateToDemonblaze();
        Logger.subStep('Realizar Click en "Log in"')
        CommonPageMethods.clickLogin();
        LoginMethods.login(user.username, user.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickHome();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitorsOptions();

        Logger.stepNumber(4)
        Logger.verification('verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.')
        HomeMethods.verifyProductDisplay('Apple monitor 24');
        HomeMethods.verifyProductDisplay('ASUS Full HD');
    })
})