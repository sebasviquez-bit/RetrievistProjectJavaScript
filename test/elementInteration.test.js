HomePage = require('../Pages/HomePage')

describe("Interacting with elements", function() {
   
it.skip("Get text for element", () => {
       browser.url('/')
       let text = $("//li[@id='menu-item-3245']//a[contains(text(),'Dog Beds')]").getText()
       console.log(text)
       HomePage.getLiText()
})

it("Is Page Header Displayed?", () => {

    console.log(HomePage.pageHeader.isDisplayed())
})


it("Does the Footer exists?", () => {

    console.log(HomePage.pageFooter.isExisting())
})


it("Is Footer in ViewPort?", () => {

    console.log(HomePage.pageFooter.isDisplayedInViewport())
})


it("Is SearchBar enabled?", () => {

    console.log(HomePage.searchBar.isEnabled())
    browser.debug()
})

it("HoverOver GiftGuides subMenu", () => {

    HomePage.hoverOver()
    HomePage.GiftGuidesDetails.isDisplayed()
    browser.debug()

})

it("SignUp to NewsLetter", () => {

    HomePage.enterEmail('sebas.viquez@gmail.com')
    assert.equal('sebas.viquez@gmail.com', HomePage.EmailCase.getValue())
    browser.keys("Return")
    expect(true, HomePage.SubsConfirmationText.isDisplayed())
    browser.debug()

})

it("Looks for BedsProducts", () => {

    HomePage.SearchForProd('Beds')
    browser.keys("Return")
    expect(true, HomePage.BedsProdTitle.waitForDisplayed())
    browser.debug()

})

it("Scrolls to PageFooter", () => {

    HomePage.scrollToPageFooter()
    assert.equal(true, HomePage.pageFooter.isDisplayedInViewport())
    //HomePage.pageFooter.isDisplayed()
    browser.debug()

})

it("Click on Deals", () => {

    HomePage.clickOnDealsLink()
    expect(browser.getUrl()).contains('/products/?on_sale=true&checked=on_sale')
    browser.debug()

})



})
