/// <reference types="Cypress" />

describe('Handle Alerts and Popups', () => {
    it('Handle Alerts and Popups Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //cypress doesn't have inbuilt support to handle child windows.
    //As cypress has the ability to manipulate DOM, there are some alternatives to handle this scenario
    //removeattr is a jquery command
    
    cy.get('#opentab').invoke('removeAttr','target').click()

    //cy.url().should('include','https://www.qaclickacademy.com/')

    //Browser Navigation to go back to original page or parent page

    cy.go('back')

    cy.log(cy.url())



    


    })
  })