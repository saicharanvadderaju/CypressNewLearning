/// <reference types="Cypress" />

describe('Checkboxes Test Suite', () => {
    it('Checkboxes Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
    .and('have.attr','name')

    cy.get('#checkBoxOption2').uncheck().should('not.be.checked')

    cy.get("[type='checkbox']").check(['option3','option1'])

    })
  })