/// <reference types="Cypress" />

describe('Static and Dynamic Dropdowns Test Suite', () => {
    it('Static and Dynamic Dropdowns Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
   //static dropdown

   cy.get('select#dropdown-class-example').select('Option1').should('have.value','option1')


   //dynamic dropdown

   cy.get('input#autocomplete').type('ind')

   //Compare 2 arrays with values
   const values=['British Indian Ocean Territory', 'India', 'Indonesia']
   cy.get('ul#ui-id-1 li div').should(($el)=>{
    const text=$el.toArray().map(el => el.innerText)
    expect(text).to.deep.eq(values)
   })

   //Check for a value in dropdown list and click on the value once found
   cy.get('ul#ui-id-1 li div').each(($el, index, $list) => {

    if($el.text()==="India")
    {
      cy.wrap($el).click()
    }

   })

   cy.get('input#autocomplete').should('have.value','India')

    })
  })