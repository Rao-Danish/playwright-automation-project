const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Logger } = require('../utils/logger');

test.describe('Negative Login Scenarios', () => {

  test('Invalid username and password should show error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    Logger.info('Navigating to login page');
    await loginPage.navigateTo('https://www.saucedemo.com/');

    Logger.info('Trying to login with invalid credentials');
    await loginPage.invalidlogin('invalid_user', 'invalid_pass');

    try {
      await expect(page.locator(loginPage.errorMessage)).toBeVisible();
      Logger.success('Error message displayed successfully');
    } catch (error) {
      Logger.error(`Error message not displayed: ${error.message}`);
      throw error;
    }
  });

  test('Empty fields should show validation error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    Logger.info('Navigating to login page');
    await loginPage.navigateTo('https://www.saucedemo.com/');

    Logger.info('Trying to login with empty username and password');
    await loginPage.invalidlogin('', '');

    try {
      await expect(page.locator(loginPage.errorMessage)).toBeVisible();
      Logger.success('Validation error shown correctly');
    } catch (error) {
      Logger.error(`Validation error not shown: ${error.message}`);
      throw error;
    }
  });
});
