/// <reference types="Cypress" />

describe('Handle child windows', () => {
    it('Handle child windows', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#opentab').then((el)=>{

     const url=el.prop('href') 
     cy.visit(url)

     cy.origin(url,()=>{
     
      cy.contains('Courses').click()

     })

    })

  })
})