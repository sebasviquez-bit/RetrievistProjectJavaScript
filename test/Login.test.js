
HomePage = require("../Pages/HomePage")
loginData = require('../data/loginData')

describe('Login Tests', function () {

it('Successful login', () => {

    browser.url(`${browser.options.baseUrl}/my-account`)
    HomePage.enterUserName(loginData.userName)
    assert.equal(loginData.userName, HomePage.UserName.getValue())
    HomePage.enterPassword(loginData.Password)
    assert.equal(loginData.Password, HomePage.Password.getValue())
    HomePage.LoginButton.click()
    expect(true, HomePage.MyAccountText.waitForDisplayed(3000))

})


})