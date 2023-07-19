/// <reference types="Cypress" />

const neatCSV=require('neat-csv') 

describe('JWT Session', () => {
    it('Logged in through local storage', async () => {

      cy.LoginAPI().then(()=>{
        cy.visit("https://rahulshettyacademy.com/client",{
       
        onBeforeLoad:(window)=>{
        window.localStorage.setItem('token',Cypress.env('token'))
        }

        })
      })

      cy.get("[class='card-body']").each(($el, index, $list) => {
        const text=$el.find('h5 b').text()

        if(text.includes('zara'))
        {
          cy.wrap($el).find('button:last-of-type').click()
        }
      })

      cy.get("[routerlink*='ca']").click()

      cy.contains('Checkout').click()

      cy.get("[placeholder*='Country']").type('ind')

      cy.get("[class*='ta-results'] button span").each(($el, index, $list) => {

      const text=$el.text()
      if(text===' India')
      {
        cy.wrap($el).click()
      } 

      })

      cy.get('.action__submit').click()

      cy.get('.order-summary button').eq(0).click()

      cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_saicharanvaddiraju.csv")
      .then(async(text)=>{
        const csv = await neatCSV(text)
        console.log(csv)

      })
      
    
    })
  })