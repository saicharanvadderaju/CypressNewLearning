class HomePage
{

getname()
{
    return cy.get(".form-group [name='name']")
}

getGender()
{
    return cy.get('#exampleFormControlSelect1')
}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

getEntrepreneurRadio()
{
    return cy.get("[value='option3']")
}

getShopButton()
{
    return cy.get(':nth-child(2) > .nav-link')
}

getTableColumn(index)
    {
        return cy.get(`tr td:nth-child(${index})`)
        //return $(`ul li:nth-child(${index}) button`);
    }

    //tr td:nth-child(2)


}

export default HomePage;