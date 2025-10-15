import { ConfirmationPage } from "../pages/ConfirmationPage";
import { FormValidationPage } from "../pages/FormValidationPage";

const formValidationPage = new FormValidationPage;
const confirmationPage = new ConfirmationPage;

export class CommonActions {
    fillValidationForm(){
        formValidationPage.enterContactName("Chelsea");
        formValidationPage.enterContactNumber("012-3456789");
        formValidationPage.enterDate('2025-12-25');
        formValidationPage.enterPayment('cashondelivery');
    }

    verifyValidation(){
        cy.location('pathname').should('equal', '/form-confirmation')
        cy.get(confirmationPage.confirmationTitle).should('exist').contains(confirmationPage.confirmationTitleText)
        cy.get(confirmationPage.confirmationMessage).should('exist').contains(confirmationPage.confirmationMessageText)
    }
}