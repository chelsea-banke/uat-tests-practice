import { ComminActions } from "../actions/commonActions"
import createProductData from "../../fixtures/createProductData.json"

const ca = new ComminActions

export class CreateProductPage{
    name_identifier = '[name="name"]'
    price_identifier = '[name="price"]'
    reference_identifier = '[name="productExtId"]'
    description_identifier = '[name="description"]'
    details_dropdown_identifier = '[data-testid="ArrowForwardIosSharpIcon"]'
    quantity_identifier = '[name="quantity"]'
    dropzone_identifier = '[data-testid="dropzone"]'
    dropzone_input_identifier = '[data-testid="dropzone-input"]'
    disabled_save_productButton_identifier = '[data-testid="Paper-testid"] div.css-6ikeyg'
    save_product_button_identifier = '[data-testid="Paper-testid"] button.css-180sv7k'
    successful_product_creation_notification_identifier = '#root div.RaNotification-success'
    new_product_details_modal_identifier = '[data-testid="Paper-testid"] div.css-1tqz2an'
    new_product_QR_code_identifier = '[data-testid="qr-code"] path[transform="matrix(1,0,0,1,51,42)"]'
    new_product_PRL_identifier = '[data-testid="Paper-testid"] a.css-12u3292'

    invalid_fields_warning_identifier = '#root div.css-1w0ym84'
    empty_name_field_warning_identifier = '[id=":r4:-helper-text"]'
    empty_price_field_warning_identifier = '[id=":r6:-helper-text"]'
    empty_referance_field_warning_identifier = '[id=":ra:-helper-text"]'
    empty_description_field_warning_identifier = '[id=":rc:-helper-text"]'
    exceeded_files_upload_warning_identifier = '#root div.css-1w0ym84'


    enterName(value){
        ca.fillField(this.name_identifier, value)
    }
    enterPrice(value){
        ca.fillField(this.price_identifier, value)
    }
    enterReference(value){
        ca.fillField(this.reference_identifier, value)
    }
    enterDescription(value){
        ca.fillField(this.description_identifier, value)
    }
    enterQuantity(value){
        ca.fillField(this.quantity_identifier, value)
    }

    clickSaveProductButton(){
        ca.clickElement(this.save_product_button_identifier)
    }

    fillProductForm(){
        this.enterName(createProductData.testData.name)
        this.enterPrice(createProductData.testData.price)
        this.enterReference(createProductData.testData.reference)
        this.enterDescription(createProductData.testData.description)
        ca.clickElement(this.details_dropdown_identifier)
        this.enterQuantity(createProductData.testData.quantity)   
        this.uploadAttachments([createProductData.testData.files[0]])
    }

    verifyProductCreation(){
        cy.get(this.successful_product_creation_notification_identifier)
          .should('exist')
        cy.get(this.new_product_details_modal_identifier)
          .should('exist')
        cy.get(this.new_product_QR_code_identifier)
          .should('exist')
        cy.get(this.new_product_PRL_identifier)
          .should('exist')
    }

    fillProductFormAndSave(){
        this.fillProductForm()
        this.clickSaveProductButton()
        this.verifyProductCreation
    }

    catchProductCreationFail(){
        ca.verifyExistence(this.invalid_fields_warning_identifier)
    }

    catchEmptyNameField(){
        ca.verifyExistence(this.empty_name_field_warning_identifier)
    }

    catchEmptyPriceField(){
        ca.verifyExistence(this.empty_price_field_warning_identifier)
    }

    catchEmptyReferenceField(){
        ca.verifyExistence(this.empty_referance_field_warning_identifier)
    }

    catchEmptyDescriptionField(){
        ca.verifyExistence(this.empty_description_field_warning_identifier)
    }

    uploadAttachments(files){
        ca.clickElement(this.dropzone_identifier)
        ca.uploadFiles(this.dropzone_input_identifier, files)
    }
}