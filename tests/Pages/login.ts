import { expect ,type Locator, type Page } from "@playwright/test";

export class Login {
      // locators
      readonly page: Page;
      readonly usernameInput: Locator;
      readonly passwordInput: Locator
      readonly submitButton: Locator;
      readonly invalidLoginMessage: Locator
    // variables
    readonly url :string = 'https://opensource-demo.orangehrmlive.com/';
    readonly message: string = 'Invalid credentials';
   
    // methods 
    constructor (page :Page) {
      this.page = page;
      this.usernameInput = page.getByPlaceholder('Username');
      this.passwordInput = page.getByPlaceholder('Password');
      this.submitButton = page.getByRole('button', { name: 'Login' });
      this.invalidLoginMessage = page.getByText(this.message);
    }
  

    // actions
    async goto() {
      await this.page.goto(this.url)
    }

    async login(username: string, password: string) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.submitButton.click();
    }

 
    //  assertions
    async expectInvalidLogin() {
      await expect(this.invalidLoginMessage).toBeVisible();
    }

}