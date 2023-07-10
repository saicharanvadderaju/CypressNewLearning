/// <reference types="Cypress" />

describe('API Test', () => {
    it('API Test', () => {

      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

      cy.intercept({
        method:'GET',
        url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
      },
      {
        statusCode:200,
        body:[
          {
              "book_name": "RestAssured with Java",
              "isbn": "RSU",
              "aisle": "2301"
          }]
      }).as('bookRetrieval')

      cy.get('.btn-primary').click()

      cy.wait('@bookRetrieval')
    

    })
  })