import { ComminActions } from "../actions/commonActions"

const ca = new ComminActions

export class ProductsPage{
    create_product_button_identifier = '[data-testid="create-button"]'

    clickCreateProduct(){
        ca.clickElement(this.create_product_button_identifier)
    }
}