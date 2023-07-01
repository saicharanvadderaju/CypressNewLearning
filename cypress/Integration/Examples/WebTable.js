/// <reference types="Cypress" />

describe('Handle WebTable', () => {
    it('Handle WebTable Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      const text=$el.text()

      if(text.includes('Appium'))
      {
        cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{


          const pricetext=price.text()
          expect(pricetext).to.equal('30')
        })
      }

    })


    //another table
    
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      const text=$el.text()

      if(text.includes('Businessman'))
      {
        cy.get('tr td:nth-child(3)').eq(index).next().then((price)=>{


          const pricetext=price.text()
          expect(pricetext).to.equal('37')
        })
      }

    })


    })
  })