/// <reference types="Cypress" />
import GreenkartPage from "../PageObjects/GreenkartPage"

describe('My First Test Suite', () => {
    it('My First Test case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    const greenkartpage=new GreenkartPage()

    cy.senddata(greenkartpage.getsearch(),'ca')//Page object is written in Greenkartpage.js and reusable method is in commands.js

    //cy.senddata(cy.get("[type='search']"),'ca')

    //cy.get("[type='search']").type('ca');

    cy.get('.product:visible').should('have.length',4)

    cy.get('.products').as('productLocator')

    cy.get('@productLocator').find('.product').should('have.length',4)

    cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      const textveg=$el.find('h4.product-name').text()

      if(textveg.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
      }
    })

    //To Extract text
    cy.get('div.brand').then((logoelement)=>{

      cy.log(logoelement.text())

    })
    
    cy.get('div.brand').should('have.text','GREENKART')

    })
  })