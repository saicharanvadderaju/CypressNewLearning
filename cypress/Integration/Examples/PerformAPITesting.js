/// <reference types="Cypress" />

describe('Perform API Testing using Cypress', () => {
    it('API Testing', () => {

      cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('total',12)
      })

    })
  })