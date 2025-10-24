// pages/LoginPage.js
const { BasePage } = require('./BasePage');

exports.LoginPage = class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators (you can change these for any website)
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '.error-button';
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }
  async invalidlogin(username, password) {
  await this.fill(this.usernameInput, username);
  await this.fill(this.passwordInput, password);
  await this.click(this.loginButton);
}
async getErrorMessage() {
    return await this.page.locator(this.errorMessage).textContent();
  }
};
