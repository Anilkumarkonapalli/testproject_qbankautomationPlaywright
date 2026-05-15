import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TEST_USERS } from '../utils/testData';

test.describe('QBank Login Tests @regression', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC-01: Should login successfully with valid credentials @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(TEST_USERS.validUser.username, TEST_USERS.validUser.password);
    await loginPage.verifyLoginSuccess();
    await page.screenshot({ path: 'screenshots/login-success.png' });
    console.log('✅ Login successful. URL:', page.url());
  });

  test('TC-02: Should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(TEST_USERS.invalidUser.username, TEST_USERS.invalidUser.password);
    await loginPage.verifyLoginFailure();
  });

  test('TC-03: Should not login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', TEST_USERS.validUser.password);
    await expect(page).toHaveURL(/qbank\.accelq\.com/);
  });

  test('TC-04: Should not login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(TEST_USERS.validUser.username, '');
    await expect(page).toHaveURL(/qbank\.accelq\.com/);
  });

  test('TC-05: Login page should have a valid title', async ({ page }) => {
    const title = await page.title();
    console.log('Login page title:', title);
    expect(title.length).toBeGreaterThan(0);
  });

});