// import { afterEach, beforeEach } from "mocha";
import { CommonActions } from "../../actions/CommonActions"
import { FormValidationPage } from "../../pages/FormValidationPage";

const ca = new CommonActions;
const formValidationPage = new FormValidationPage;

describe("validation with past date in selected in date field", ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.expandtesting.com/form-validation')
        ca.fillValidationForm();
    })
    afterEach(()=>{
        cy.location('pathname').should('equal', '/form-validation')
    })

    it("fails", ()=>{
        formValidationPage.enterDate("2024-12-25")
        formValidationPage.submitForm()
        formValidationPage.catchInvalidDate()
    })

    //more cases of invalid contact formats...
})