/// <reference types="Cypress" />

describe('Visibility and Invisibility of Element Test Suite', () => {
    it('Visibility and Invisibility of an Element Test case', () => {
    cy.visit(Cypress.env('url')+'/AutomationPractice/');

   //Handle Radiobuttons

   cy.get("[value='radio2']").check().should('be.checked')

   //Select a radio button by iterating and its value
   cy.get("[class='radioButton']").each(($el, index, $list) => {

    if($el.attr("value")==='radio1')
    {
      cy.wrap($el).click()
    }

   })

    })
  })