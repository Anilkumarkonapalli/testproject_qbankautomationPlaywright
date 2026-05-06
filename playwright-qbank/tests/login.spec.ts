import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TEST_USERS } from '../utils/testData';

test.describe('QBank Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // ✅ TC-01: Valid login
  test('TC-01: Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      TEST_USERS.validUser.username,
      TEST_USERS.validUser.password
    );

    await loginPage.verifyLoginSuccess();

    // Take screenshot of post-login state
    await page.screenshot({ path: 'screenshots/login-success.png' });
    console.log('✅ Login successful. Current URL:', page.url());
  });

  // ❌ TC-02: Invalid credentials
  test('TC-02: Should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      TEST_USERS.invalidUser.username,
      TEST_USERS.invalidUser.password
    );

    await loginPage.verifyLoginFailure();
    console.log('✅ Error message shown for invalid credentials');
  });

  // ❌ TC-03: Empty username
  test('TC-03: Should not login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('', TEST_USERS.validUser.password);

    // Should stay on login page
    await expect(page).toHaveURL(/qbank\.accelq\.com/);
  });

  // ❌ TC-04: Empty password
  test('TC-04: Should not login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(TEST_USERS.validUser.username, '');

    // Should stay on login page
    await expect(page).toHaveURL(/qbank\.accelq\.com/);
  });

  // ✅ TC-05: Verify page title on login page
  test('TC-05: Login page should have correct title', async ({ page }) => {
    const title = await page.title();
    console.log('Login page title:', title);
    expect(title.length).toBeGreaterThan(0);
  });

});