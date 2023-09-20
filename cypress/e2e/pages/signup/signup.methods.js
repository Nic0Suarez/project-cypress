import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods {

    static insertUsername(username) {
        SignupElements.textboxes.username.invoke('val', username);
    }
    static insertPassword(password) {
        SignupElements.textboxes.password.invoke('val', password);
    }
    static clickSignup() {
        SignupElements.buttons.signup.click();
    }
    static singup(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickSignup();
    }
    static verifySignUpSucessful() {
        CommonPageMethods.verifyAlert('Sign up successful.');
    }

    static verifyUserAlreadyExist() {
        CommonPageMethods.verifyAlert('This user already exist.');
    }

}