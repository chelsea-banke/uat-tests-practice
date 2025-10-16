import { ComminActions } from "../actions/commonActions"
import users from "../../fixtures/users.json"
import loginData from "../../fixtures/loginData.json"

const ca = new ComminActions

export class LoginPage{
    username = '[name="username"]'
    password = '[name="password"]'
    grayedLoginButton = '#root div.css-h5fkc8'
    loginButton = '[data-testid="Sign-In"]'
    wrongCredentialsWarning = '#root div:nth-child(2) > div.RaNotification-error > div.css-1w0ym84'
    emptyUsernameWarning = '#\\:r3\\:-helper-text'
    emptyPasswordWarning = '#\\:r5\\:-helper-text'

    enterUsername(value=null){
        ca.fillField(this.username, value)
    }
    enterPassword(value=null){
        ca.fillField(this.password, value)
    }

    clickLogin(){
        ca.clickElement(this.loginButton)
    }

    loginAsCCAdmin(){
        this.enterUsername(users.ccAdmin.username)
        this.enterPassword(users.ccAdmin.password)
        this.clickLogin()
        cy.location('pathname').should('equal', '/')
    }

    catchFailedLogin(){
        cy.location('pathname').should('equal', loginData.path)
        ca.verifyExistence(this.wrongCredentialsWarning, loginData.failedLoginWarningText)
    }
}