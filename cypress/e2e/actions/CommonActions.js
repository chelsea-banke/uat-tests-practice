import { ConfirmationPage } from "../pages/ConfirmationPage";
import { FormValidationPage } from "../pages/FormValidationPage";
import testData from "../../fixtures/formValidation/formValidationTestData.json"
import confirmationPageData from "../../fixtures/confirmationPageData.json"

const formValidationPage = new FormValidationPage;
const confirmationPage = new ConfirmationPage;

export class CommonActions {
    fillValidationForm(){
        formValidationPage.enterContactName(testData.validData.name);
        formValidationPage.enterContactNumber(testData.validData.number);
        formValidationPage.enterDate(testData.validData.date);
        formValidationPage.enterPayment(testData.validData.paymentMethond);
    }

    verifyValidation(){
        confirmationPage.verifyConfirmationPagePath()
        cy.get(confirmationPage.confirmationTitle).should('exist').contains(confirmationPageData.confirmationTitleText)
        cy.get(confirmationPage.confirmationMessage).should('exist').contains(confirmationPageData.confirmationMessageText)
    }
}