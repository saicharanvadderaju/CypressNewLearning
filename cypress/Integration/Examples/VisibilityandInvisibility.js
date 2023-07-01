/// <reference types="Cypress" />

describe('Visibility and Invisibility of Element Test Suite', () => {
    it('Visibility and Invisibility of an Element Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
   cy.get('#displayed-text').should('be.visible')

   cy.get('#hide-textbox').click()

   cy.get('#displayed-text').should('not.be.visible')

   //enabled and displayed

   cy.get('#hide-textbox').should('be.enabled').and('be.visible')

    })
  })