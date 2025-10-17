import { ComminActions } from "../actions/commonActions"
import users from "../../fixtures/users.json"
import loginData from "../../fixtures/loginData.json"

const ca = new ComminActions

export class LoginPage{
    username_identifier = '[name="username"]'
    password_identifier = '[name="password"]'
    grayed_login_button_identifier = '#root div.css-h5fkc8'
    login_button_identifier = '[data-testid="Sign-In"]'
    wrong_credentials_warning_identifier = '#root div:nth-child(2) > div.RaNotification-error > div.css-1w0ym84'
    empty_username_warning_identifier = '#\\:r3\\:-helper-text'
    empty_password_warning_identifier = '#\\:r5\\:-helper-text'

    enterUsername(value){
        ca.fillField(this.username_identifier, value)
    }
    enterPassword(value){
        ca.fillField(this.password_identifier, value)
    }

    clickLogin(){
        ca.clickElement(this.login_button_identifier)
    }

    loginAsCCAdmin(){
        this.enterUsername(users.ccAdmin.username)
        this.enterPassword(users.ccAdmin.password)
        this.clickLogin()
        cy.location('pathname').should('equal', '/')
    }

    catchFailedLogin(){
        cy.location('pathname').should('equal', loginData.path)
        ca.verifyExistence(this.wrong_credentials_warning_identifier, loginData.failedLoginWarningText)
    }
}