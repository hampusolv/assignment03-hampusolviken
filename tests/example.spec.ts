import { test, expect } from '@playwright/test';


test('TC1 Test login and see homepage', async ({ page }) => {
  await page.getByRole('heading', { name: 'Tester Hotel Overview' }).click();
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
});

// test.describe("backend", ()=>{
//   test('testcase-nr01', async ({ page }) => {
//     await page.goto('http://localhost:3000');
//   })

// });


