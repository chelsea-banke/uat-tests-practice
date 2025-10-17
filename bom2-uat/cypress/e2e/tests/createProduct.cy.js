import { LoginPage } from "../pages/loginPage"
import { ProductsPage } from "../pages/productsPage"
import { RootPage } from "../pages/rootPage"
import loginData from "../../fixtures/loginData.json"
import { CreateProductPage } from "../pages/createProductPage"
import { ComminActions } from "../actions/commonActions"
import createProductData from "../../fixtures/createProductData.json"

const loginPage = new LoginPage
const rootPage = new RootPage
const productsPage = new ProductsPage
const createProductPage = new CreateProductPage
const ca = new ComminActions

describe('new product creation', { testIsolation: false }, ()=>{
    before(()=>{
        cy.visit(loginData.path)
        loginPage.loginAsCCAdmin()
        rootPage.clickMerchantMenu()
        rootPage.clickProductsMenu()
        productsPage.clickCreateProduct()
    })

    afterEach(()=>{
        cy.visit('/product/create')
    })

    it('passes creation of new product with valid fields', ()=>{
        createProductPage.fillProductFormAndSave()
    })

    it('fails creation with empty product name field', ()=>{
        createProductPage.fillProductForm()
        createProductPage.enterName(null)
        createProductPage.clickSaveProductButton()
        createProductPage.catchProductCreationFail()
        createProductPage.catchEmptyNameField()
    })

    it('fails creation with empty product price field', ()=>{
        createProductPage.fillProductForm()
        createProductPage.enterPrice(null)
        createProductPage.clickSaveProductButton()
        createProductPage.catchProductCreationFail()
        createProductPage.catchEmptyPriceField()
    })

    it('fails creation with empty product reference field', ()=>{
        createProductPage.fillProductForm()
        createProductPage.enterReference(null)
        createProductPage.clickSaveProductButton()
        createProductPage.catchProductCreationFail()
        createProductPage.catchEmptyReferenceField()
    })

    it('fails creation with empty product description field', ()=>{
        createProductPage.fillProductForm()
        createProductPage.enterDescription(null)
        createProductPage.clickSaveProductButton()
        createProductPage.catchProductCreationFail()
        createProductPage.catchEmptyDescriptionField()
    })

    it('fails creation with attatchments exceeding 5',()=>{
        createProductPage.fillProductForm()
        createProductPage.uploadAttachments(createProductData.testData.files)
        ca.verifyExistence(createProductPage.exceeded_files_upload_warning_identifier)
    })
})