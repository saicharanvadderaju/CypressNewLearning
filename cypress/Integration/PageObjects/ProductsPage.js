class ProductsPage
{

getProductsTitle()
{
    return cy.get('h4.card-title a')
}

getProductButton()
{
    return cy.get('.btn.btn-info')
}

getCheckOutButton()
{
    return cy.contains('Checkout')
}

}

export default ProductsPage;