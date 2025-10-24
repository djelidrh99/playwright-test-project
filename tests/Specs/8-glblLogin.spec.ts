import {  test  } from "@playwright/test";
import { poManger } from "../Pages/poManger";
import jsonData from "../files/jsonData.json"


let pageManager: poManger;

// jsondata => string => ts data

let parseJSON = JSON.parse(JSON.stringify(jsonData));

test.beforeEach(async ({ page }) => {
      console.log(parseJSON.userName);
    pageManager = new poManger(page);
    await pageManager.gotoLoginPage().goto();

})


test.describe('Login tests', () => {

    test("valid login" , async ({page})=>{
        // (await pageManager.gotoLoginPage()).login(parseJSON.userName, parseJSON.password);
        
        await pageManager.gotoHomePage().expectWelcomeMessage();
        

    })


   
})