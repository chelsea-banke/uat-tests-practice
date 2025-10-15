// import { afterEach, beforeEach } from "mocha";
import { CommonActions } from "../../actions/CommonActions"
import { FormValidationPage } from "../../pages/FormValidationPage";

const ca = new CommonActions;
const formValidationPage = new FormValidationPage;

describe("validation with empty inputFields", ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.expandtesting.com/form-validation')
        ca.fillValidationForm();
    })
    afterEach(()=>{
        cy.location('pathname').should('equal', '/form-validation')
    })

    it("fails with empty contact name field", ()=>{
        cy.get(formValidationPage.contactName).clear();
        formValidationPage.submitForm()
        formValidationPage.catchInvalidName()
    })

    it("fails with empty contact number field", ()=>{
        cy.get(formValidationPage.contactNumber).clear();
        formValidationPage.submitForm()
        formValidationPage.catchInvalidNumber()
    })

    it("fails with empty contact date field", ()=>{
        cy.get(formValidationPage.datePicker).clear();
        formValidationPage.submitForm()
        formValidationPage.catchInvalidDate()
    }) 

    
    it("fails with empty contact payment field", ()=>{
        cy.get(formValidationPage.paymentSelector).invoke('val', '')
        formValidationPage.submitForm()
        formValidationPage.catchInvalidPayment()
    })
})