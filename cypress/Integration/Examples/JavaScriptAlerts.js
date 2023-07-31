/// <reference types="Cypress" />

describe('Handle Alerts and Popups', () => {
    it('Handle Alerts and Popups Test case', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    //Cypress auto handles alerts and confirm popups

    cy.get("[class='example'] ul li:nth-child(1) button").click()

    cy.on('window:alert',(str)=>{
      expect(str).to.equal('I am a JS Alert')
    })

    cy.get("[class='example'] ul li:nth-child(2) button").click()

    cy.on('window:confirm',(str)=>{
      expect(str).to.equal('I am a JS Confirm')
    })

    cy.get("[class='example'] ul li:nth-child(3) button").click()

   

    /*
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



    

*/
    })
  })