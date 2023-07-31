/// <reference types="Cypress" />

describe('WebTable Sorting', () => {
    it('Check if data in a column is sorted', () => {
    cy.visit('https://the-internet.herokuapp.com/tables');

    cy.get('table#table1 thead tr th:nth-child(1)').click()

    var Firstname=[];
    cy.get('table#table1 tbody tr td:nth-child(1)').each(($el) => {

      Firstname.push($el.text())
    })
    cy.wrap(Firstname).should("equal", Firstname.sort())


    


    })
  })