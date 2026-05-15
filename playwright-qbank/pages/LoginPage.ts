import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locators — update selectors if the actual page differs
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // ⚠️ Update these selectors based on actual HTML of qbank.accelq.com
    this.usernameInput = page.locator('#qb-username');
    this.passwordInput = page.locator('#qb-password');
    this.loginButton   = page.locator('.qb-signin-button');
    this.errorMessage  = page.locator('.error, .alert-danger, [class*="error"], [class*="invalid"]').first();
    this.logoutButton  = page.locator('button:has-text("Logout"), a:has-text("Logout"), button:has-text("Sign Out")').first();
  }

  /** Navigate to the login page */
  async goto() {
    await this.page.goto('https://qbank.accelq.com');
    await this.page.waitForLoadState('networkidle');
  }

  /** Fill credentials and submit */
  async login(username: string, password: string) {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /** Assert login was successful */
  async verifyLoginSuccess() {
    // Check URL changed away from login page
    await expect(this.page).not.toHaveURL(/login/i, { timeout: 10000 });

    // Check page title or dashboard element is visible
    // ⚠️ Update this assertion based on what appears after successful login
    const pageTitle = await this.page.title();
    console.log('Post-login page title:', pageTitle);
    expect(pageTitle).not.toBe('');
  }

  /** Assert login failed with error */
  async verifyLoginFailure() {
    await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
  }

  /** Perform logout */
  async logout() {
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}