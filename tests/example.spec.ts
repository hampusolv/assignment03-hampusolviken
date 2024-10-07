import { test, expect } from '@playwright/test';
import { APIRequestContext } from "@playwright/test";





test('testsuite frontend 01', async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.locator('#app > div > form > div:nth-child(1) > input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
  await page.locator('#app > div > form > div:nth-child(2) > input[type=password]').fill(`${process.env.TEST_PASSWORD}`);
  await page.locator('#app > div > form > div.field.action > button').click();
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible()
  await page.getByRole('heading', { name: 'Tester Hotel Overview' }).click();
});






test('testsuite frontend 02', async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.locator('#app > div > form > div:nth-child(1) > input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
  await page.locator('#app > div > form > div:nth-child(2) > input[type=password]').fill(`${process.env.TEST_PASSWORD}`);
  await page.locator('#app > div > form > div.field.action > button').click();
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible()
  await expect(page.locator('#app > div > div > div:nth-child(2) > a')).toBeVisible();
  await page.locator('#app > div > div > div:nth-child(2) > a').click();
});


test('Test case 01 - Backend', async ({ request }) => {
  const response = await request.post('http://localhost:3000/api/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD
    }
  });

  const jsonResponse = await response.json();
  const accessToken = jsonResponse.token;
  const username = process.env.TEST_USERNAME;
  const getPostsResponse = await request.get('http://localhost:3000/api/clients', {
    headers: {
      'x-user-auth': JSON.stringify({ 
        username: username,
        token: accessToken
      }),
      'Content-Type': 'application/json'
    }
  });
  expect(getPostsResponse.ok()).toBeTruthy();
  expect(getPostsResponse.status()).toBe(200);

  const getAllClients = await getPostsResponse.json();
  console.log(getAllClients);
});



test('Test case 02 - Backend', async ({ request }) => {

  const response = await request.post('http://localhost:3000/api/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD
    }
  });

  const jsonResponse = await response.json();
  const accessToken = jsonResponse.token;
  const username = process.env.TEST_USERNAME;


  const getPostsResponse = await request.get('http://localhost:3000/api/Rooms', {
    headers: {
      'x-user-auth': JSON.stringify({
        username: username,
        token: accessToken
      }),
      'Content-Type': 'application/json'
    }
  });
  expect(getPostsResponse.ok()).toBeTruthy();
  expect(getPostsResponse.status()).toBe(200);
  const getAllRooms = await getPostsResponse.json();
  console.log(getAllRooms);

});








