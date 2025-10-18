import { ComminActions } from "../actions/commonActions"

const ca = new ComminActions

export class RootPage{
    merchant_menu_identifier = '[data-testid="merchant_payment-menu-item"]'
    products_menu_identifier = '[data-testid="product-menu-item"]'

    clickMerchantMenu(){
        ca.clickElement(this.merchant_menu_identifier)
    }
    clickProductsMenu(){
        ca.clickElement(this.products_menu_identifier)
    }
}