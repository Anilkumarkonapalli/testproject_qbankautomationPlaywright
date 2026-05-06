# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-qbank\tests\login.spec.ts >> QBank Login Tests >> TC-05: Login page should have correct title
- Location: playwright-qbank\tests\login.spec.ts:63:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
            - textbox "Username" [ref=e33]
            - separator [ref=e34]
            - textbox "Password" [ref=e35]
          - generic [ref=e37] [cursor=pointer]: Show Credentials
          - generic:
            - generic [ref=e38]:
              - generic [ref=e39] [cursor=pointer]: Forgot username/password? >
              - generic [ref=e40] [cursor=pointer]: Not enrolled? Sign up now >
            - button "Sign In" [ref=e42] [cursor=pointer]
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
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { TEST_USERS } from '../utils/testData';
  4  | 
  5  | test.describe('QBank Login Tests', () => {
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     // Navigate to login page before each test
  9  |     const loginPage = new LoginPage(page);
  10 |     await loginPage.goto();
  11 |   });
  12 | 
  13 |   // ✅ TC-01: Valid login
  14 |   test('TC-01: Should login successfully with valid credentials', async ({ page }) => {
  15 |     const loginPage = new LoginPage(page);
  16 | 
  17 |     await loginPage.login(
  18 |       TEST_USERS.validUser.username,
  19 |       TEST_USERS.validUser.password
  20 |     );
  21 | 
  22 |     await loginPage.verifyLoginSuccess();
  23 | 
  24 |     // Take screenshot of post-login state
  25 |     await page.screenshot({ path: 'screenshots/login-success.png' });
  26 |     console.log('✅ Login successful. Current URL:', page.url());
  27 |   });
  28 | 
  29 |   // ❌ TC-02: Invalid credentials
  30 |   test('TC-02: Should show error for invalid credentials', async ({ page }) => {
  31 |     const loginPage = new LoginPage(page);
  32 | 
  33 |     await loginPage.login(
  34 |       TEST_USERS.invalidUser.username,
  35 |       TEST_USERS.invalidUser.password
  36 |     );
  37 | 
  38 |     await loginPage.verifyLoginFailure();
  39 |     console.log('✅ Error message shown for invalid credentials');
  40 |   });
  41 | 
  42 |   // ❌ TC-03: Empty username
  43 |   test('TC-03: Should not login with empty username', async ({ page }) => {
  44 |     const loginPage = new LoginPage(page);
  45 | 
  46 |     await loginPage.login('', TEST_USERS.validUser.password);
  47 | 
  48 |     // Should stay on login page
  49 |     await expect(page).toHaveURL(/qbank\.accelq\.com/);
  50 |   });
  51 | 
  52 |   // ❌ TC-04: Empty password
  53 |   test('TC-04: Should not login with empty password', async ({ page }) => {
  54 |     const loginPage = new LoginPage(page);
  55 | 
  56 |     await loginPage.login(TEST_USERS.validUser.username, '');
  57 | 
  58 |     // Should stay on login page
  59 |     await expect(page).toHaveURL(/qbank\.accelq\.com/);
  60 |   });
  61 | 
  62 |   // ✅ TC-05: Verify page title on login page
  63 |   test('TC-05: Login page should have correct title', async ({ page }) => {
  64 |     const title = await page.title();
  65 |     console.log('Login page title:', title);
> 66 |     expect(title.length).toBeGreaterThan(0);
     |                          ^ Error: expect(received).toBeGreaterThan(expected)
  67 |   });
  68 | 
  69 | });
```