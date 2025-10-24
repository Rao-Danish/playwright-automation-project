const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { Helper } = require('../utils/helper');
const { Logger } = require('../utils/logger');
const testData = require('../config/testData');

test('Complete E2E workflow using POM + Config + Logger', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  Logger.info('Navigating to website...');
  await loginPage.navigateTo(testData.baseURL);

  Logger.info('Logging in with valid credentials...');
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  Logger.success('Login successful ✅');

  Logger.info('Adding product to cart...');
  await homePage.addFirstProductToCart();
  await homePage.openCart();

  Logger.info('Proceeding to checkout...');
  await cartPage.clickCheckout();
  await checkoutPage.fillDetails(
    testData.userDetails.firstName,
    testData.userDetails.lastName,
    testData.userDetails.postalCode
  );
  await checkoutPage.completeCheckout();

  const message = await checkoutPage.verifySuccess();
  expect(message).toContain('Thank you');

  Logger.success('Order placed successfully!');
  await Helper.takeScreenshot(page, 'OrderConfirmation');
});
