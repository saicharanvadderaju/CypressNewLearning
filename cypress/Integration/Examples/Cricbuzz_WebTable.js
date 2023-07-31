/// <reference types="Cypress" />
import GreenkartPage from "../PageObjects/GreenkartPage"

describe('Cricbuzz WebSite', () => {

    it('Sum of Scores in Cricbuzz WebSite', () => {
    cy.visit(Cypress.env('cricbuzz'));

    //Click on the first match score card
    cy.get("[class*='cb-mtch-crd-rt-itm'] li:nth-child(1)").click()

    cy.get('div#matchCenter .cb-nav-bar a').each(($el, index, $list) => {

      const text=$el.text()

      if(text=='Scorecard')
      {
        cy.wrap($el).click()
      }

    })


    //Sum the individual score of the Batsmen
    var sum=0;
    cy.get("div#innings_2 [class*='cb-ltst-wgt-hdr']:nth-child(1) [class*='cb-scrd-itms'] [class*='text-right']:nth-child(3)")
    .each(($el, index, $list) => {

      const text=$el.text()

      sum=Number(sum)+Number(text)

    }).then(()=>{cy.log(sum)})

    //Get the extras and add it to the Bastmen score

    var totalsum=0
    cy.get("div#innings_2 [class*='cb-ltst-wgt-hdr']:nth-child(1) [class*='cb-scrd-itms'] [class*='cb-text-black']")
    .then((extras)=>{
      const exstrastext=extras.text()

      totalsum=sum+Number(exstrastext)


    }).then(()=>cy.log(totalsum))

    //Get the totalruns and compare it with individual batsmen score + extras
    cy.get("div#innings_2 [class*='cb-ltst-wgt-hdr']:nth-child(1) [class*='cb-scrd-itms'] [class='cb-col cb-col-8 text-bold text-black text-right']")
    .then((total)=>{

      const totalruns=Number(total.text())
      expect(totalruns).to.equal(totalsum)
    })
    
    })
  })