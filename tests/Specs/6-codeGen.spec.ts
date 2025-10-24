import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Test Login Page' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByText('Password: SuperSecretPassword!', { exact: true }).click();
  await page.getByText('Password: SuperSecretPassword!', { exact: true }).click();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).dblclick();
  await page.getByText('Password: SuperSecretPassword!', { exact: true }).click();
  await page.locator('b').filter({ hasText: 'SuperSecretPassword!' }).dblclick();
  await page.getByText('TestifyStack | Email, SMS, OTP and Webhooks Testing Stack for QA & Dev SUT').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice ');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('etgrgdhtrhjtrr');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});