import { test, expect } from '@playwright/test';
import mockResponse from "../../../externalData/dynamicData.json"




test.describe("Mocking API Response", () => {


    test("methode one ", async ({page})=>{

        await page.route("https://api.randomuser.me/?nat=us",async route=>{
            route.fulfill({
                body: JSON.stringify(mockResponse),
            })
        })
        await page.goto("https://demo.automationtesting.in/DynamicData.html")
        await page.getByRole("button", { name: "Get Dynamic Data" }).click()
        await expect(page.locator("#loading")).toContainText("djelid")


    })
})