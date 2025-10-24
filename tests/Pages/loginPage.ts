import { expect, type Locator, type Page } from '@playwright/test';


export class LoginPage {

    // locators
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly invalidMessage: Locator;
    // variables
    readonly url :string = 'https://opensource-demo.orangehrmlive.com/';
    readonly message: string = 'Invalid credentials';
    // methods 
    constructor (page:Page ) {
        this.page = page
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.invalidMessage = page.getByText(this.message)
    }

    // actions

    async goto() {
        await this.page.goto(this.url);
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    //  assertions
    async expectInvalidMessage() {
        await expect(this.invalidMessage).toBeVisible();
    }




}