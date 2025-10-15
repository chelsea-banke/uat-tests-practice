import { CommonActions } from "../../actions/CommonActions"
import { FormValidationPage } from "../../pages/FormValidationPage";

const ca = new CommonActions;
const formValidationPage = new FormValidationPage;

describe("validation with valid input in fields", ()=>{
    it("passed", ()=>{
        cy.visit('https://practice.expandtesting.com/form-validation')
        ca.fillValidationForm();
        formValidationPage.submitForm()
        ca.verifyValidation()
    })
})