import { LoginPage } from "../pages/loginPage"
import users from "../../fixtures/users.json"
import loginData from "../../fixtures/loginData.json"
import { ComminActions } from "../actions/commonActions"

const loginPage = new LoginPage
const ca = new ComminActions

describe("login into mbp", ()=>{
    beforeEach(()=>{
        cy.visit(loginData.path)
    })

    it("passes for valid credentials", ()=>{
        loginPage.loginAsCCAdmin()
    })

    it("fails to login with wrong username", ()=>{
        loginPage.enterUsername(users.badUser.username)
        loginPage.enterPassword(users.ccAdmin.password)
        loginPage.clickLogin()
        loginPage.catchFailedLogin()
        loginPage.enterUsername(null)
        ca.verifyExistence(loginPage.empty_username_warning_identifier, loginData.emptyUsernameWarningText)
    })

    it("fails to login with wrong password", ()=>{
        loginPage.enterUsername(users.ccAdmin.username)
        loginPage.enterPassword(users.badUser.password)
        loginPage.clickLogin()
        loginPage.catchFailedLogin()
        loginPage.enterPassword(null)
        ca.verifyExistence(loginPage.empty_password_warning_identifier, loginData.emptyPasswordWarningText)
    })
})