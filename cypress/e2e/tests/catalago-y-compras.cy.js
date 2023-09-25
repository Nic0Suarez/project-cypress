import { Logger } from "../util/logger";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { productDetailsMethods } from "../pages/product-details/product-details.methods";
import { cartMethods } from "../pages/cart/cart.methods";
const user = LoginData.validCredentials;
const product = 'ASUS Full HD';

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

    it('Agregar producto al carrito', () => {

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
        Logger.step('Hacer clic en un producto específico.')
        HomeMethods.clickOnProductsLink(product);

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        productDetailsMethods.verifyProductDetailsDisplayed();

        Logger.stepNumber(6)
        Logger.step(' Hacer clic en el botón "Add to cart"')
        productDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.subStep('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.')
        productDetailsMethods.verifyProductAddMessage();
        CommonPageMethods.clickCart();
        cartMethods.verifyProductAdded(product);
    })
})