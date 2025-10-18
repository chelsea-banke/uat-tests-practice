import { ComminActions } from "../actions/commonActions"
import createProductData from "../../fixtures/createProductData.json"
import prlData from "../../fixtures/prlData.json"

const ca = new ComminActions 

export class PRLPage{
    decrement_quantity_identifier = '[data-testid="table-order-content-row"] span.minus'
    increment_quantity_identifier = '[data-testid="table-order-content-row"] span.plus'
    quantity_identifier = '[data-testid="table-order-content-row"] [name="productQuantity"]'
    unit_price_identifier = 'div:nth-of-type(3) [data-testid="table-order-content-col"] span'
    total_price_identifier = 'div[data-testid="table-order-content-row"]:nth-of-type(4) [data-testid="table-order-content-col"] span'
    invalid_quantity_warning_identifier = '[data-testid="alert-amount"]'
    
    mtn_payment_option_identifier = 'div.col-3:nth-of-type(1) [data-testid="payment-method-picker-item"] div.styles_paymentMethodItemCard__lUuMv'
    orange_payment_option_identifier = 'div.col-3:nth-of-type(2) [data-testid="payment-method-picker-item"] div.styles_paymentMethodItemCard__lUuMv'
    ue_payment_option_identifier = 'div:nth-of-type(3) [data-testid="payment-method-picker-item"] div.styles_paymentMethodItemCard__lUuMv'

    eu_num_identifier = '[name="paymentInput"]'
    momo_num_identifier = '[data-cy="input"]'
    invalid_momo_num_message_identifier = '[class="styles_message__r+iGj"]'
    invalid_eu_num_message_identifier = '[data-testid="phone-input_message"]'
    initiate_payment_button_identifier = '[data-testid="submit-button"]'

    confirmation_header_identifier = '[data-testid="heading-second"]'
    invalid_name_warning_identifier = '[data-testid="second-screen_wrapper"] span.styles_message__r\\+iGj'
    first_name_identifier = '[data-cy="input-mandatory"]'
    last_name_identifier = '[name="nameLast"]'
    company_name_idetifier = '[name="companyName"]'
    company_address_identifier = '[name="companyAddress"]'
    phone_number_identifier = '[name="phonenumber"]'
    make_payment_button_identifier = '[data-testid="submit-button"]'

    payment_confirmation_modal_identifier = '[data-testid="dialog"]'
    payment_confirmation_button_identifier = '[data-testid="payment-confirmation-btn"]'

    incrementQuantity(){
        cy.get(this.quantity_identifier)
          .invoke('val')
          .then(quantity => {
                ca.clickElement(this.increment_quantity_identifier)
                if(quantity == createProductData.testData.quantity){
                    ca.verifyExistence(this.invalid_quantity_warning_identifier)
                }
            }
        )
    }

    decrementQuantity(){
        ca.clickElement(this.decrement_quantity_identifier)
    }

    enterQuantity(value){
        ca.fillField(this.quantity_identifier ,value)
    }

    enterMomoNum(value){
        ca.fillField(value)
    }
    enterEUNum(value){
        ca.fillField(value)
    }

    payWithMtn(number=prlData.mtnNum){
        ca.clickElement(this.mtn_payment_option_identifier)
        ca.fillField(this.momo_num_identifier, number)
        this.clickInitiatePaymentButton()
    }

    payWithOrange(number=prlData.orangerNum){
        ca.clickElement(this.orange_payment_option_identifier)
        ca.fillField(this.momo_num_identifier, number)
        this.clickInitiatePaymentButton()
    }

    payWithEu(number=prlData.euNum){
        ca.clickElement(this.ue_payment_option_identifier)
        ca.fillField(this.eu_num_identifier, number)
        this.clickInitiatePaymentButton()
    }

    clickInitiatePaymentButton(){
        ca.clickIfEnebled(this.initiate_payment_button_identifier)
    }

    enterFirstName(value){
        ca.fillField(this.first_name_identifier, value)
    }

    clickMakePaymentButton(){
        ca.clickElement(this.make_payment_button_identifier)
    }

    clickConfirmPaymentButton(){
        ca.clickElement(this.payment_confirmation_button_identifier)
        ca.verifyExistence(this.payment_confirmation_modal_identifier)
    }

    makePayment(){
        this.enterFirstName(prlData.firstName)
        ca.clickElement(this.make_payment_button_identifier)
        ca.verifyExistence(this.payment_confirmation_modal_identifier)
    }

    verifyTotal(){
        cy.get(this.quantity_identifier)
          .invoke('val')
          .then(unitPrice=>{
                cy.get(this.total_price_identifier)
                  .invoke('text')
                  .should('equal', `${unitPrice*createProductData.testData.price} FCFA`)
          })
    }
}