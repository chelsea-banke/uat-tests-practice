export class FormValidationPage{
    contactName = '[name="ContactName"]';
    contactNumber = '[name="contactnumber"]';
    datePicker = '[name="pickupdate"]';
    paymentSelector = '[name="payment"]';
    submitButton = '#core button.btn';
    
    invalidName = '#core div:nth-child(1) > div.invalid-feedback';
    invalidNumber = '#core div:nth-child(2) > div.invalid-feedback';
    invalidDate = '#core div:nth-child(3) > div.invalid-feedback';
    invalidPayment = '#core div:nth-child(4) > div.invalid-feedback';

    invalidNameText = 'Please enter your Contact name.'
    invalidNumberText = 'Please provide your Contact number.'
    invalidDateText = 'Please provide valid Date.'
    invalidPaymentText = 'Please select the Paymeny Method.'

    enterContactName(value){
        cy.get(this.contactName)
          .clear()
          .type(value)
    }

    enterContactNumber(value){
        cy.get(this.contactNumber)
          .clear()
          .type(value)
    }

    enterDate(value){
        cy.get(this.datePicker)
          .clear()
          .type(value)
    }

    enterPayment(value){
        cy.get(this.paymentSelector)
          .select(value)
    }

    submitForm(){
        cy.get(this.submitButton).click()
    }

    catchInvalidName(){
        cy.get(this.invalidName)
          .should('exist')
          .contains(this.invalidNameText)
    }

    catchInvalidNumber(){
        cy.get(this.invalidNumber)
          .should('exist')
          .contains(this.invalidNumberText)
    }

    catchInvalidDate(){
        cy.get(this.invalidDate)
          .should('exist')
          .contains(this.invalidDateText)
    }   

    catchInvalidPayment(){
        cy.get(this.invalidPayment)
          .should('exist')
          .contains(this.invalidPaymentText)
    }   
}