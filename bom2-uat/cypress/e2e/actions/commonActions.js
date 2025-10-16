export class ComminActions{

    fillField(identifier, value){
        cy.get(identifier).clear()
        if(value != null){
            cy.get(identifier).type(value)
        }
    }

    clickElement(identifier){
        cy.get(identifier)
          .click()
    }

    verifyExistence(identifier, content=null){
      cy.get(identifier).should('exist')
      if(content != null){
          cy.get(identifier).contains(content)
      }
    }
}