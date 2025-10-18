import { CommonActions } from "../actions/CommonActions"
import { FormValidationPage } from "../pages/FormValidationPage";
import testData from "../../fixtures/formValidation/formValidationTestData.json"

const ca = new CommonActions;
const formValidationPage = new FormValidationPage;

describe("form validation", ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.expandtesting.com/form-validation')
        ca.fillValidationForm();
    })

    it("passes with valid input in fields", ()=>{
        ca.fillValidationForm();
        formValidationPage.submitForm()
        ca.verifyValidation()
    })

    it("fails with empty contact name field", ()=>{
        cy.get(formValidationPage.contactName).clear();
        formValidationPage.submitForm()
        formValidationPage.catchInvalidName()
        formValidationPage.verifyValidationPagePath()
    })

    it("fails with empty contact number field", ()=>{
        cy.get(formValidationPage.contactNumber).clear();
        formValidationPage.submitForm()
        formValidationPage.catchInvalidNumber()
        formValidationPage.verifyValidationPagePath()
    })

    it("fails with empty date field", ()=>{
        cy.get(formValidationPage.datePicker).clear();
        formValidationPage.submitForm()
        formValidationPage.catchInvalidDate()
        formValidationPage.verifyValidationPagePath()
    }) 

    
    it("fails with empty payment field", ()=>{
        cy.get(formValidationPage.paymentSelector).invoke('val', '')
        formValidationPage.submitForm()
        formValidationPage.catchInvalidPayment()
        formValidationPage.verifyValidationPagePath()
    })

    it("fails with contact number field lacking '-' after the first three digits", ()=>{
        formValidationPage.enterContactNumber(testData.invalidData.number.withoutSeperator)
        formValidationPage.submitForm()
        formValidationPage.catchInvalidNumber()
        formValidationPage.verifyValidationPagePath()
    })
    
    it("fails with past date selected in date field", ()=>{
        formValidationPage.enterDate(testData.invalidData.date.pastDate)
        formValidationPage.submitForm()
        formValidationPage.catchInvalidDate()
    })
})