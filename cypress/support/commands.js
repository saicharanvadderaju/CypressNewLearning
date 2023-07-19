// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import ProductsPage from "../Integration/PageObjects/ProductsPage";
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', (productName) => { 
    const productpage=new ProductsPage()
    productpage.getProductsTitle().each(($el, index, $list) => {

        const text=$el.text();
        if(text.includes(productName))
        {
            productpage.getProductButton().eq(index).click()
        }
  
      })

 })

 Cypress.Commands.add('typedata', (locator,name) => { 

    cy.get(locator).type(name)
 })

 Cypress.Commands.add('senddata', (locator,name) => { 

    locator.type(name)
 })

 Cypress.Commands.add('performclick', (locator) => { 

    locator.click()
 })

 Cypress.Commands.add("LoginAPI",()=>{

   cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
   {"userEmail":"saicharanvaddiraju@gmail.com","userPassword":"Saicharan@2b8"}).
   then((response)=>{
      expect(response.status).to.eq(200)
      Cypress.env('token',response.body.token)
   })

 })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })