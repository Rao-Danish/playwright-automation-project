// pages/CheckoutPage.js
const { BasePage } = require('./BasePage');

exports.CheckoutPage = class CheckoutPage extends BasePage {
    constructor(page){
        super(page);
        this.firstName      = '#first-name';
        this.lastName       = '#last-name';
        this.postalCode     = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton   = '#finish';
        this.successMessage = '.complete-header';
    }

    async fillDetails(firstName, lastName, postalCode){
        await this.fill(this.firstName, firstName);
        await this.fill(this.lastName, lastName);
        await this.fill(this.postalCode, postalCode);
    }

    async completeCheckout(){
        await this.click(this.continueButton);
        await this.click(this.finishButton);
    }

    async verifySuccess() {
    return await this.getText(this.successMessage);
  }
};