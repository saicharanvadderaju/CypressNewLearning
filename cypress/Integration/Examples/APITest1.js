/// <reference types="Cypress" />

describe('Security Test', () => {
    it('Security Test', () => {

      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

      cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{

        req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Sai'

        req.continue((res)=>{
          //expect(res.statusCode).to.equal(403)
        })
      }).as("dummyurl")

      cy.get('.btn-primary').click()

      cy.wait('@dummyurl')

    })
  })