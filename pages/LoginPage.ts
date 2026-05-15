import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton:   Locator;
  readonly errorMessage:  Locator;
  readonly logoutButton:  Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"], input[id="username"], input[placeholder*="username" i], input[type="text"]').first();
    this.passwordInput = page.locator('input[name="password"], input[id="password"], input[type="password"]').first();
    this.loginButton   = page.locator('button[type="submit"], input[type="submit"], button:has-text("Login"), button:has-text("Sign In")').first();
    this.errorMessage  = page.locator('.error, .alert-danger, [class*="error"], [class*="invalid"]').first();
    this.logoutButton  = page.locator('button:has-text("Logout"), a:has-text("Logout"), button:has-text("Sign Out")').first();
  }

  async goto() {
    await this.page.goto('https://qbank.accelq.com');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username: string, password: string) {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyLoginSuccess() {
    await expect(this.page).not.toHaveURL(/login/i, { timeout: 10000 });
    const pageTitle = await this.page.title();
    console.log('Post-login page title:', pageTitle);
    expect(pageTitle.length).toBeGreaterThan(0);
  }

  async verifyLoginFailure() {
    await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
  }

  async logout() {
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}