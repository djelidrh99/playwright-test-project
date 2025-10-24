import { test, expect } from '@playwright/test';
import { HomePage } from '../../Pages/homePage';
import { LoginPage } from '../../Pages/loginPage';

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

    test('valid login', async ({ page,request }) => {
        await loginPage.login("Admin", "admin123");
        await page.getByText("PIM").click();
        await expect(page.getByRole("heading", { name: "PIM" })).toBeVisible();
        const employedResponse = await page.waitForResponse("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC")
        const employedResponseBody = await employedResponse.json();
        console.log(employedResponseBody);
        const emplyedNumber = employedResponseBody.data[0].empNumber; 
        console.log(emplyedNumber);
        const requestBody = 
        {
            ids:[emplyedNumber],
        }

        const headers = {
            cookie : "orangehrm=ggv9j9m6i6tull6b5uf0hvu80r",
        }

        const responseDeleteEmployed = await request.delete("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees", {
            data: requestBody,
            headers: headers
        })

        const responseDeleteEmployedBody = await responseDeleteEmployed.json();
        console.log(responseDeleteEmployedBody);

    })
   

})