import { test, expect } from '@playwright/test';




test.describe('Frontend testsuite', () => {
  test('testsuite 01', async ({ page }) => {
    //inlogning
    await page.goto("http://localhost:3000");
    await page.locator('#app > div > form > div:nth-child(1) > input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
    await page.locator('#app > div > form > div:nth-child(2) > input[type=password]').fill(`${process.env.TEST_PASSWORD}`);
    await page.locator('#app > div > form > div.field.action > button').click();

    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible()
    await page.getByRole('heading', { name: 'Tester Hotel Overview' }).click();
  })

});




