class HomePage {
     
/**
 * Elements
 */

     get pageHeader() { return $('#product-deals > div.product-deals__header > span')}
     get imageTitle() { return $('h2')}
     get searchBar() {return $('#searchform > div.ep-autosuggest-container > input[type=text]')} 
     get columTitle() { return $('#product-deals > div.product-deals__header > span')}
     get pageFooter() { return $('body > footer.footer.hide-mobile')}
     get parent() { return $('ul')}
     get childElements() { return this.parent.$$('il')}
     get Deals() { return $('#menu-item-783 > a')}
     get GiftGuides() { return $('#menu-item-784 > a')}
     get GiftGuidesDetails() { return $('#menu-item-3079 > a')}
     get UserName() { return $('#gigya-login-form > div:nth-child(1) > div.gigya-composite-control.gigya-composite-control-textbox > input')}
     get Password() { return $('#gigya-login-form > div:nth-child(1) > div.gigya-composite-control.gigya-composite-control-password > input')}
     get EmailCase() { return $('#sailthru-subscribe-id--1 > div.sailthru_form_input.form-group > input')}
     get MyAccountText() { return $('body > main > section.account__dashboard > div.account__heading > h1')}
     get SubsConfirmationText() { return $('#subscription > div > div.sailthru_shortcode > div > div > div.success')}
     get LoginButton() { return $('#gigya-login-form > div:nth-child(1) > div.gigya-composite-control.gigya-composite-control-submit.js-submit-login > input')}
     get noxGearProd() { return $('#product-deals > div.js-slider-container.card-slider > div > a:nth-child(1)')}
     get EliteFieldProd() { return $('#product-deals > div.js-slider-container.card-slider > div > a:nth-child(2)')}
     get BedsProdTitle() { return $('body > main > section.js-top-products.top-products.top-products--search > h2')}
     get Browsermenu() { return $('body > header > div.c-header-brand > a.hamburger.js-hamburger > div')}
     get Collars() { return $('#menu-item-1067 > a')}

/**
 * Functions
 */

    SearchForProd(text) { 

        this.searchBar.waitForDisplayed()
        this.searchBar.setValue(text)

    }

    clickEliteFieldProd() {

        this.EliteFieldProd.isDisplayed()
        this.EliteFieldProd.click()

    }

     clicknoxGearProd() {

        this.noxGearProd.isDisplayed()
        this.noxGearProd.click()

     }

     scrollToPageFooter() {
         
        this.pageFooter.moveTo()
         
     }

     hoverOver() {

        this.GiftGuides.waitForDisplayed()
        this.GiftGuides.moveTo(1,1)

    }

     getHoverDetailsTest() { 

        this.GiftGuidesDetails.waitForDisplayed()
        return this.GuiftGuideDetails.getText()

    }

     enterUserName(text) {

         this.UserName.waitForDisplayed()
         this.UserName.setValue(text)

    }

     enterPassword(text) {
        this.Password.waitForDisplayed()
        this.Password.setValue(text)
    }

     getLiText() {
         this.childElements.filter((element) => {
              console.log(element.getText())
         })

    }

     clickOnDealsLink() {
         if(this.Deals.isDisplayed() === true){
             this.Deals.click()
         }

    }

     enterEmail(text) {
         this.EmailCase.waitForDisplayed()
         this.EmailCase.setValue(text)

    }
     
}
module.exports = new HomePage()