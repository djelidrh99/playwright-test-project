import { expect, type Locator, type Page } from '@playwright/test';


export class HomePage {

    // locators
    readonly page: Page;
    readonly userProfile: Locator;
    // variables
   
    // methods 
    constructor (page:Page ) {
        this.page = page
        this.userProfile = page.getByAltText('profile picture')
    }

    // actions

 
    //  assertions
    async expectProfilePicture() {
        await expect(this.userProfile).toBeVisible();
    }




}