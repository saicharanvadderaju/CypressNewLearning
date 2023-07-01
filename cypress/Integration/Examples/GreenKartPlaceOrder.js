/// <reference types="Cypress" />

describe('Placing Order test Suite', () => {
    it('PLace order Test case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    cy.get("[type='search']").type('ca');

    cy.get('.products').as('productLocator')

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      const textveg=$el.find('h4.product-name').text()

      if(textveg.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
      }
    })

    cy.get('.cart-icon > img').click()

    cy.contains('PROCEED TO CHECKOUT').click()

    cy.contains('Place Order').click()


    })
  })