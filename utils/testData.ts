/**
 * Test Data & Credentials
 *
 * In LOCAL dev:  uses hardcoded fallback values
 * In CI (GitHub Actions / Jenkins):  reads from environment variables/secrets
 *
 * GitHub Actions: Set via repository Secrets
 *   Settings > Secrets and variables > Actions > New repository secret
 *   QBANK_USERNAME = qbankadmin
 *   QBANK_PASSWORD = qbTrnPass1&
 *
 * Jenkins: Set via Credentials Manager
 *   Manage Jenkins > Credentials > Add > Username with password
 *   ID: qbank-username / qbank-password
 */

export const TEST_USERS = {
  validUser: {
    username: process.env.QBANK_USERNAME || 'qbankadmin',
    password: process.env.QBANK_PASSWORD || 'qbTrnPass1&',
  },
  invalidUser: {
    username: 'wronguser',
    password: 'WrongPass123!',
  },
  emptyUser: {
    username: '',
    password: '',
  },
};

export const URLS = {
  base:      'https://qbank.accelq.com',
  login:     'https://qbank.accelq.com',
  dashboard: '/dashboard', // Update to actual post-login path
};

export const TIMEOUTS = {
  navigation:  10_000,
  element:      5_000,
  animation:    2_000,
};