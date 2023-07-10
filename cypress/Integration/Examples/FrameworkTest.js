/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage";
import ProductsPage from "../PageObjects/ProductsPage";

describe('Building Framework', () => {


  before(() => {

    cy.fixture('example').then(function (data) {

        globalThis.data = data

    })

});

    it('Sample Framework Test case', () => {
      const homepage=new HomePage()
      const productspage=new ProductsPage()
    cy.visit(Cypress.env('url')+'/angularpractice/');

    //cy.get(".form-group [name='name']").type(globalThis.data.name)
    cy.typedata(".form-group [name='name']",globalThis.data.name)

    homepage.getGender().select(globalThis.data.gender)

    homepage.getname().should('have.attr','minlength',2)

    homepage.getTwoWayDataBinding().should('have.value',globalThis.data.name)

    //cy.pause()
    homepage.getEntrepreneurRadio().should('be.disabled')

    //Click on shop button
    cy.performclick(homepage.getShopButton()) //check command.js for click reusable method
    /*homepage.getShopButton().click()*/

    //select a product/products
    globalThis.data.productname.forEach(element => cy.selectProduct(element));

    productspage.getCheckOutButton().click()

    var sum=0;

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
      var pricetext=$el.text().split(" ")[1];//Grab the value at first index from array
      pricetext=pricetext.trim()//Remove extra spaces
      sum=Number(sum)+Number(pricetext);//Number(string) - used to convert string to Integer
       
    }).then(()=>{cy.log(sum)})

    cy.get('td.text-right h3 strong').then((element)=>{
 
      const amount=element.text()
      var total=amount.split(" ")[1]
      var totalprice=total.trim()
      expect(Number(totalprice)).to.equal(sum)

    })

    cy.contains('Checkout').click()
    cy.get('#country').type('india')
    
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get("[type='submit']").click()
    cy.get('.alert').then((alerttext)=>{
      expect(alerttext.text()).to.include(' Thank you! Your order will be delivered in next few weeks :-).')
    })

    
    })

   
    })
  
  
