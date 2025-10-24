import { chromium , type FullConfig } from "@playwright/test";
import { poManger } from "../Pages/poManger";
async function globalSetup(config: FullConfig) {
    const {baseURL , storageState} = config.projects[0].use;
 const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(baseURL!);
    const po : poManger = new poManger(page);
    await po.gotoLoginPage().login("Admin" , "admin123");
    await page.context().storageState({path : storageState as string});
    await browser.close();
    

}

export default globalSetup;