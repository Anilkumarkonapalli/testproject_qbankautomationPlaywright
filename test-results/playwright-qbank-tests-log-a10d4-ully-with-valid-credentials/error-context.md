# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-qbank\tests\login.spec.ts >> QBank Login Tests >> TC-01: Should login successfully with valid credentials
- Location: playwright-qbank\tests\login.spec.ts:14:7

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not ""
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - generic [ref=e9]: YOUR TRUSTED FAMILY BANK
    - generic [ref=e11]:
      - generic [ref=e12] [cursor=pointer]: Home
      - generic [ref=e13] [cursor=pointer]: Products
      - generic [ref=e14] [cursor=pointer]: Branches
      - generic [ref=e15] [cursor=pointer]: Learning center
      - generic [ref=e16] [cursor=pointer]: Test Apps
  - generic [ref=e17]:
    - generic [ref=e19]:
      - generic [ref=e25]:
        - generic [ref=e26]: Welcome back!
        - generic [ref=e27]:
          - generic [ref=e29]:
            - radio [checked] [ref=e30] [cursor=pointer]
            - text: Personal Banking
            - radio [ref=e31] [cursor=pointer]
            - text: Corporate Banking
          - generic [ref=e32]:
            - textbox "Username" [ref=e33]: qbankadmin
            - separator [ref=e34]
            - textbox "Password" [ref=e35]: qbTrnPass1&
          - generic [ref=e37] [cursor=pointer]: Show Credentials
          - generic:
            - generic [ref=e38]:
              - generic [ref=e39] [cursor=pointer]: Forgot username/password? >
              - generic [ref=e40] [cursor=pointer]: Not enrolled? Sign up now >
            - button "Sign In" [active] [ref=e42] [cursor=pointer]
      - img [ref=e44]
    - generic [ref=e48]:
      - generic [ref=e50]: How can we help you today ?
      - generic [ref=e51]:
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e55]: Credit Card
          - generic [ref=e56]: A credit card for every need. Extreme convenience & unmatched benefits.
          - generic [ref=e57] [cursor=pointer]: Learn more >
        - generic [ref=e58]:
          - img [ref=e60]
          - generic [ref=e61]: Auto Loan
          - generic [ref=e62]: Quick, hassle free loans with lowest interest rates for your dream car.
          - generic [ref=e63] [cursor=pointer]: Learn more >
        - generic [ref=e64]:
          - img [ref=e66]
          - generic [ref=e67]: Mortgage
          - generic [ref=e68]: Get a step-by-step guidance from an experienced mortgage banker.
          - generic [ref=e69] [cursor=pointer]: Learn more >
        - generic [ref=e70]:
          - img [ref=e72]
          - generic [ref=e73]: Invest
          - generic [ref=e74]: Personal, ongoing guidance and advice to our broad range of products.
          - generic [ref=e75] [cursor=pointer]: Learn more >
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Learn about investing and how to find an advisor you trust
        - generic [ref=e85]: Whether you're just getting started or know a lot about investing, Q Bank offers resources and guidance to help you pursue your goals.
      - generic [ref=e86]:
        - generic [ref=e87]: Why Invest?
        - generic [ref=e88]: Compare ways to Invest
        - generic [ref=e89]: Online investing with Q Bank
        - generic [ref=e90]: Explore Q Bank Advisors
    - generic [ref=e94]:
      - generic [ref=e96]: News & Learnings
      - generic [ref=e97]:
        - generic [ref=e98]:
          - img [ref=e99]
          - generic [ref=e100]: 6 savings strategies for aspiring home buyers
          - generic [ref=e101] [cursor=pointer]: Learn more >
        - generic [ref=e102]:
          - img [ref=e103]
          - generic [ref=e104]: 7 ways to take control of your finances in 2017
          - generic [ref=e105] [cursor=pointer]: Learn more >
        - generic [ref=e106]:
          - img [ref=e107]
          - generic [ref=e108]: "Money and Parenting : Tips for every stage"
          - generic [ref=e109] [cursor=pointer]: Learn more >
  - generic [ref=e114]:
    - generic [ref=e115]:
      - generic [ref=e120]: YOUR TRUSTED FAMILY BANK
      - generic [ref=e123]:
        - text: This bank website is an example application of accelQ.
        - link "www.accelq.com" [ref=e124] [cursor=pointer]:
          - /url: http://www.accelq.com
    - generic [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]: PRODUCTS
        - generic [ref=e128] [cursor=pointer]: Savings & CDs
        - link "Credit Cards" [ref=e129] [cursor=pointer]:
          - /url: /#!/product/cc
          - generic [ref=e130]: Credit Cards
        - generic [ref=e131] [cursor=pointer]: Auto Loans
        - generic [ref=e132] [cursor=pointer]: Mortgage
        - generic [ref=e133] [cursor=pointer]: Investing
      - generic [ref=e134]:
        - generic [ref=e135]: BRANCHES
        - link "Branches" [ref=e136] [cursor=pointer]:
          - /url: /#!/branches
          - generic [ref=e137]: Branches
        - generic [ref=e138] [cursor=pointer]: ATMs
        - generic [ref=e139] [cursor=pointer]: International ATMs
      - generic [ref=e140]:
        - generic [ref=e141]: CONTACT
        - generic [ref=e142] [cursor=pointer]: Contact Us
        - generic [ref=e143] [cursor=pointer]: Report Frauds
        - generic [ref=e144] [cursor=pointer]: Complaints & Feedbacks
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  | 
  6  |   // Locators — update selectors if the actual page differs
  7  |   readonly usernameInput: Locator;
  8  |   readonly passwordInput: Locator;
  9  |   readonly loginButton: Locator;
  10 |   readonly errorMessage: Locator;
  11 |   readonly logoutButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 | 
  16 |     // ⚠️ Update these selectors based on actual HTML of qbank.accelq.com
  17 |     this.usernameInput = page.locator('#qb-username');
  18 |     this.passwordInput = page.locator('#qb-password');
  19 |     this.loginButton   = page.locator('.qb-signin-button');
  20 |     this.errorMessage  = page.locator('.error, .alert-danger, [class*="error"], [class*="invalid"]').first();
  21 |     this.logoutButton  = page.locator('button:has-text("Logout"), a:has-text("Logout"), button:has-text("Sign Out")').first();
  22 |   }
  23 | 
  24 |   /** Navigate to the login page */
  25 |   async goto() {
  26 |     await this.page.goto('https://qbank.accelq.com');
  27 |     await this.page.waitForLoadState('networkidle');
  28 |   }
  29 | 
  30 |   /** Fill credentials and submit */
  31 |   async login(username: string, password: string) {
  32 |     await this.usernameInput.waitFor({ state: 'visible' });
  33 |     await this.usernameInput.fill(username);
  34 |     await this.passwordInput.fill(password);
  35 |     await this.loginButton.click();
  36 |     await this.page.waitForLoadState('networkidle');
  37 |   }
  38 | 
  39 |   /** Assert login was successful */
  40 |   async verifyLoginSuccess() {
  41 |     // Check URL changed away from login page
  42 |     await expect(this.page).not.toHaveURL(/login/i, { timeout: 10000 });
  43 | 
  44 |     // Check page title or dashboard element is visible
  45 |     // ⚠️ Update this assertion based on what appears after successful login
  46 |     const pageTitle = await this.page.title();
  47 |     console.log('Post-login page title:', pageTitle);
> 48 |     expect(pageTitle).not.toBe('');
     |                           ^ Error: expect(received).not.toBe(expected) // Object.is equality
  49 |   }
  50 | 
  51 |   /** Assert login failed with error */
  52 |   async verifyLoginFailure() {
  53 |     await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
  54 |   }
  55 | 
  56 |   /** Perform logout */
  57 |   async logout() {
  58 |     await this.logoutButton.waitFor({ state: 'visible' });
  59 |     await this.logoutButton.click();
  60 |     await this.page.waitForLoadState('networkidle');
  61 |   }
  62 | }
```