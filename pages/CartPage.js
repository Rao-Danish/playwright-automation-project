// pages/CartPage.js
const { BasePage } = require('./BasePage');

exports.CartPage = class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutButton = '#checkout';
  }

  async clickCheckout() {
    await this.click(this.checkoutButton);
  }
};
