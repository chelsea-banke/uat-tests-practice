// import { afterEach, beforeEach } from "mocha";
import { CommonActions } from "../../actions/CommonActions"
import { FormValidationPage } from "../../pages/FormValidationPage";

const ca = new CommonActions;
const formValidationPage = new FormValidationPage;

describe("validation with invalid number formats in contact number field", ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.expandtesting.com/form-validation')
        ca.fillValidationForm();
    })
    afterEach(()=>{
        cy.location('pathname').should('equal', '/form-validation')
    })

    it("fails with contact number field lacking '-' after the first three digits", ()=>{
        cy.get(formValidationPage.contactNumber).type("012=3456789");
        cy.get(formValidationPage.submitButton).click()
        cy.get(formValidationPage.invalidNumber).contains('Please provide your Contact number.')
    })

    //more cases of invalid contact formats...
})