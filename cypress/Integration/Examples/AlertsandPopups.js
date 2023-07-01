/// <reference types="Cypress" />

describe('Handle Alerts and Popups', () => {
    it('Handle Alerts and Popups Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Cypress auto handles alerts and confirm popups

    cy.get('#alertbtn').click()

    cy.get("[value='Confirm']").click()

    //verify the text present on the popup or alert
    //Cypress doesn't have inbuilt support to capture the text from alert or popup.It has the capability to listen to events
    //window:alert event will get triggered - This is a developer concept

    cy.on('window:alert',(str)=>{
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str)=>{
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })



    


    })
  })