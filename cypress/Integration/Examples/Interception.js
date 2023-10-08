/// <reference types="Cypress" />

describe('Cy.Intercept Examples', () => {
    it('test api with simple intercept stubbing', () => {

      cy.visit('https://jsonplaceholder.typicode.com/')

      cy.intercept({
        path:'/posts'
      }).as('posts')

      cy.get("table:nth-of-type(1) a[href='/posts']").click()
      cy.wait('@posts').then(inter=>{
        cy.log(JSON.stringify(inter))
        expect(inter.response.body).to.have.length(100)
      })

    })

    it('Response mocking with intercept with static response',()=>{
      cy.visit('https://jsonplaceholder.typicode.com/')
      cy.intercept('GET','/posts',{totalpost:5}).as('posts')
      cy.get("table:nth-of-type(1) a[href='/posts']").click()
      cy.wait('@posts').then(res=>{
        expect(res.response.body.totalpost).to.eq(5)
      })

    })

    it('Response mocking with intercept with dynamic response from fixture',()=>{
      cy.visit('https://jsonplaceholder.typicode.com/')
      cy.intercept('GET','/posts',{fixture:'createUser.json'}).as('posts')
      cy.get("table:nth-of-type(1) a[href='/posts']").click()
      cy.wait('@posts').then(res=>{
        expect(res.response.body.name).to.eq('bob')
      })

    })
  })