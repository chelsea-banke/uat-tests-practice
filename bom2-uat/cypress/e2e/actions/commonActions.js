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

    clickIfEnebled(identifier){
        cy.get(identifier).then($btn => {
            if (!$btn.is(':disabled')) {
                cy.wrap($btn).click();
            } else {
                cy.log('Button is disabled, skipping click');
            }
        });
    }

    verifyExistence(identifier, content=null){
      cy.get(identifier).should('exist')
      if(content != null){
          cy.get(identifier).contains(content)
      }
    }

    verifyDisabled(identifier){
        cy.get(identifier).then($btn => {
          const disabled =
            $btn.is(':disabled') ||
            $btn.attr('aria-disabled') === 'true' ||
            $btn.hasClass('disabled') ||
            $btn.css('pointer-events') === 'none';
          expect(disabled, 'button should be disabled').to.be.true;
        });
    }

    uploadFiles(identifier, files){
        cy.get(identifier).selectFile(files, { force: true });
    }
}