import confirmationPageData from "../../fixtures/confirmationPageData.json"

export class ConfirmationPage{
    confirmationTitle = '#core h1'; 
    confirmationMessage = '#core p';
    
    verifyConfirmationPagePath(){
        cy.location('pathname').should('equal', confirmationPageData.pagePath)
    }
}