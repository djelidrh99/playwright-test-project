import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/homePage';
import { LoginPage } from '../Pages/loginPage';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeAll(" ff" ,async ()=>{
    console.log('before all tests');
})

test.beforeEach(" ff",async ({ page }) => {
    console.log('before each test');
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goto()
})

test.afterEach("dd",async ({ page }) => {
    console.log('after each test');
})

test.afterAll("ff",async ()=>{
    console.log('after all tests');
})




test.describe('actions page', () => {

    test('valid login', async ({ page }) => {
        await loginPage.login("Admin", "admin123");
        await homePage.expectProfilePicture();
    })
     test('invalid login', async ({ page }) => {
        await loginPage.login("Admin", "admin12388");
        await loginPage.expectInvalidMessage();
    })

})