import { expect ,type Locator , type Page } from "@playwright/test";

export class Home {
    // locators
    readonly page: Page;
    readonly welcomeMessage: Locator

    // variables
    // methods
constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('//img[@class="oxd-userdropdown-img"]');
   }

   // actions
    // assertions

   async expectWelcomeMessage() {
       await expect(this.welcomeMessage).toBeVisible();
   }

}