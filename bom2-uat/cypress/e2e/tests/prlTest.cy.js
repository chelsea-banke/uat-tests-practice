import { PRLPage } from "../pages/prlPage"
import createProductData from "../../fixtures/createProductData.json"
import prlData from "../../fixtures/prlData.json"
import { ComminActions } from "../actions/commonActions"
const prlPage = new PRLPage
const ca = new ComminActions

describe('prl payment', ()=>{
    beforeEach(()=>{
        cy.visit(prlData.path)
    })

    it('passes with mtn payment verification', ()=>{
        prlPage.payWithMtn()
        prlPage.makePayment()
        prlPage.clickConfirmPaymentButton()
    })
    
    it('passes with orange payment verification', ()=>{
        prlPage.payWithOrange()
        prlPage.makePayment()
        prlPage.clickConfirmPaymentButton()
    })

    it('fails with quantity exceeding stock on increment', ()=>{
        for (let i = 0; i < createProductData.testData.quantity; i++) {
          prlPage.incrementQuantity()
        }
    })

    it('fails with quantity exceeding stock on manual input', ()=>{
        prlPage.enterQuantity(createProductData.testData.quantity + 1)
        ca.verifyExistence(prlPage.invalid_quantity_warning_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with quantity less than 1 on manual input', ()=>{
        prlPage.enterQuantity(0)
        ca.verifyExistence(prlPage.invalid_quantity_warning_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails payment with unselected payment method', ()=>{
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with empty mtn number', ()=>{
        prlPage.payWithMtn(null)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
        prlPage.payWithMtn(123456789)
        prlPage.payWithMtn(null)
        ca.verifyExistence(prlPage.invalid_momo_num_message_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with empty om number', ()=>{
        prlPage.payWithOrange(null)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
        prlPage.payWithOrange(123456789)
        prlPage.payWithOrange(null)
        ca.verifyExistence(prlPage.invalid_momo_num_message_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with empty eu number', ()=>{
        prlPage.payWithEu(null)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
        prlPage.payWithEu(123456789)
        prlPage.payWithEu(null)
        ca.verifyExistence(prlPage.invalid_eu_num_message_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with invalid mtn number', ()=>{
        prlPage.payWithMtn(123456789)
        ca.verifyExistence(prlPage.invalid_momo_num_message_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with invalid om number', ()=>{
        prlPage.payWithOrange(123456789)
        ca.verifyExistence(prlPage.invalid_momo_num_message_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with invalid eu number', ()=>{
        prlPage.payWithEu(123456789)
        ca.verifyExistence(prlPage.invalid_eu_num_message_identifier)
        ca.verifyDisabled(prlPage.initiate_payment_button_identifier)
    })

    it('fails with empty first name field', ()=>{
        prlPage.payWithMtn()
        ca.verifyDisabled(prlPage.make_payment_button_identifier)
        prlPage.enterFirstName('john')
        prlPage.enterFirstName(null)
        ca.verifyExistence(prlPage.invalid_name_warning_identifier)
        ca.verifyDisabled(prlPage.make_payment_button_identifier)
    })
})