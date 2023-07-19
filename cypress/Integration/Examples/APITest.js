/// <reference types="Cypress" />

describe('API Test', () => {
    it('API Test', () => {

      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

      cy.get('a.btn-success').should('have.text','Browse Products')

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

      cy.wait('@bookRetrieval').then(({request,response})=>
      {
        
        cy.get('tr').should('have.length',response.body.length+1)
      })

      cy.get('p').should('have.text','Oops only 1 Book available')
    

    })
  })