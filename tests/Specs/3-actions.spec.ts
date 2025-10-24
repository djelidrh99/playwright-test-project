import { test, expect } from '@playwright/test';




test.describe('actions page', () => {
test('valid login', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com')
 
  await page.getByRole('link', { name: 'Test Login Page' }).click()
  await page.locator("#username").fill("practice")
  await page.goBack()
  await page.goForward()
  await page.reload()

  await page.locator("#username").fill("practice")
  await page.locator("#password").fill("SuperSecretPassword")
  await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice")
})

// test('invalid login', async ({ page }) => {

//   await page.goto('https://practice.expandtesting.com/login')
//   await page.locator("#username").fill("practice")
//   await page.locator("#password").fill("SuperSecretPassword")
//   await page.locator("button[type='submit']").click()
//   await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!")
// })
})