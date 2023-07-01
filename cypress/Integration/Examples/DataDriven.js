/// <reference types="Cypress" />

describe('Data Driven Test Suite', () => {

  const testData = [
    {
        name: 'Name1',
        email: 'Pass1@gmail.com'
    },
    {
        name: 'Name2',
        email: 'Pass2@gmail.com'
    },
    {
        name: 'Name3',
        email: 'Pass3@gmail.com'
    }
]

testData.forEach((credentials) => {
    it('DataDriven test', () => {
      cy.visit('https://rahulshettyacademy.com/angularpractice/');
      cy.get(".form-group [name='name']").type(credentials.name);
      cy.get(':nth-child(2) > .form-control').type(credentials.email)
        
    })
});

  })