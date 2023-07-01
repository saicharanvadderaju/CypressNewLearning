/// <reference types="Cypress" />

describe('Mouse Hover Actions', () => {
    it('Handle Alerts and Popups Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Cypress doesn't support mouse hover
    //There is alertnate way using jquery show method

    cy.get('.mouse-hover-content').invoke('show')

   cy.contains('Top').click()

    cy.url().should('include','top')

    cy.contains('Reload').click({force:true})


    })
  })