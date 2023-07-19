/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage";

describe('Handle WebTable', () => {
  
    it('Handle WebTable Test case', () => {
      const homepage=new HomePage()
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      homepage.getTableColumn(2).each(($el, index, $list) => {

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

    it("Orange hrm WebTable Testcase",()=>{

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
      cy.get("[name='username']").type('Admin')
      cy.get("[name='password']").type('admin123')
      cy.get('.oxd-button').click()

      cy.get('ul.oxd-main-menu li:nth-child(1)').click()

      cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(2)')
      .each(($el, index, $list) => {
        const username=$el.text()
        if(username==='Alice.Duval'){
          cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(2)')
          .eq(index).next().then((role)=>{
            const userrole=role.text()
            cy.log(userrole)
            if(userrole==='ESS')
            {
              cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(3)')
              .eq(index).next().then((name)=>{
                const employeename=name.text()
                cy.log(employeename)

                if(employeename==='Alice Duval')
                {
                  cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(4)')
                  .eq(index).next().then((status)=>{
                    const employeestatus=status.text()
                    expect(employeestatus).to.equal('Enabled')
                  })
                }
              })
            }
          
          })
        }

      })
    })

    it("Traverse table in backward direction",()=>{

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
      cy.get("[name='username']").type('Admin')
      cy.get("[name='password']").type('admin123')
      cy.get('.oxd-button').click()

      cy.get('ul.oxd-main-menu li:nth-child(1)').click()

      cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(4)')
      .each(($el, index, $list) => {
     
        const employeename=$el.text()
        if(employeename==='Joe Root')
        {
          cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(4)')
          .eq(index).prev().then((role)=>{
            const userrole=role.text()
            cy.log(userrole)
            if(userrole==='ESS')
            {
              cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(3)')
              .eq(index).prev().then((name)=>{
                const username=name.text()
                cy.log(username)
              })
            }
              if(userrole==='ESS')
            {
              //cy.get('div.oxd-table div.oxd-table-body div.oxd-table-row div.oxd-table-cell:nth-child(2)')
              cy.get("div.oxd-table div.oxd-table-body div.oxd-table-row [type='checkbox']")
              .eq(index).click({force:true}).should('be.checked')
              
            }
          })
        }


      })

    })
  })