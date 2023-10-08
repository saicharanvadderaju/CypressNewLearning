/// <reference types="Cypress" />

const neatCSV=require('neat-csv') 

describe('JWT Session', () => {
  before(()=>{Cypress.session.clearAllSavedSessions()})
  beforeEach(() => {
    cy.LoginAPI('saicharanvaddiraju@gmail.com','Saicharan@2b8').then(()=>{
      cy.visit("https://rahulshettyacademy.com/client",{
     
      onBeforeLoad:(window)=>{
      window.localStorage.setItem('token',Cypress.env('token'))
      }

      })
    })
  })

    it('Logged in through local storage', () => {
      //{"userEmail":"saicharanvaddiraju@gmail.com","userPassword":"Saicharan@2b8"}).
      cy.visit('https://rahulshettyacademy.com/client')
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
      .then((text)=>{
        const csv = neatCSV(text)
        console.log(csv)

      })
      
    
    })

    
    it('Validate1', () => {

      cy.visit('https://rahulshettyacademy.com/client')
      cy.contains('HOME').should('exist')
    })

    it('Validate2', () => {

      cy.visit('https://rahulshettyacademy.com/client')
      cy.contains('ORDERS').should('exist')
    })

    it('Validate3', () => {

      cy.visit('https://rahulshettyacademy.com/client')
      cy.contains('Cart').should('exist')
    })
  })