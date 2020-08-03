
HomePage = require("../../Pages/HomePage")

describe('TabSwitch', function () {


it('Switch to Amazon Prod0', () => {

    browser.url('/')
    HomePage.clicknoxGearProd()
    assert.equal(browser.url('https://www.amazon.com/dp/B014RP80NM?tag=akc-retrievist-20&linkCode=ogi&th=1&psc=1'))

})

it('Switch to Amazon Prod1', () => {

    browser.url('/')
    HomePage.clickEliteFieldProd()
    assert.equal(browser.url('https://www.amazon.com/dp/B00J84153K?tag=akc-retrievist-20&linkCode=ogi&th=1&psc=1'))
    browser.pause(2000)

})

})