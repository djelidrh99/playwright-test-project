import { test, expect } from '@playwright/test';




test.describe('login page @ft', () => {
test('valid login', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/login')
  await page.locator("#username").fill("practice")
  await page.locator("#password").fill("SuperSecretPassword!")
  await page.locator("button[type='submit']").click()
  await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!")
})

test('invalid login', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/login')
  await page.locator("#username").fill("practice")
  await page.locator("#password").fill("SuperSecretPassword")
  await page.locator("button[type='submit']").click()
  await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!")
})
})