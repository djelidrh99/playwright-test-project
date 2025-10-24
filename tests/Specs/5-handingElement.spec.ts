import { test, expect } from '@playwright/test';




test.describe('home page page', () => {
test('index locator', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/dropdown');
  // normal way
//   await page.locator("(//div[@class='card card-custom w-100 h-100'])[3]").click()
  //playwright way 
//   const baseLocator = page.locator("//div[@class='card card-custom w-100 h-100']")
//     await baseLocator.locator('nth=-1').click()
//     await baseLocator.filter({ hasText: 'Dynamic Table' }).click()

// droplist select

// await page.locator("#country").selectOption('India')
//  anotherWay
// await page.selectOption('#country', {index:4})

// // assert length
//  const option = await page.locator('#country option')
// await  expect(option).toHaveCount(252)

 const option = await page.$$('#country option')
 
 await expect(option).toHaveLength(252)
 await expect(option.length).toBe(252)

//  text assert 
const text = await page.locator('#country').textContent()
await expect(text).toContain('India')

})

test ('date picker', async ({ page }) => {
   await page.goto('https://demo.automationtesting.in/Datepicker.html');
    // await page.locator('#datepicker1').click();
    // await page.locator('(//span[@class="ui-icon ui-icon-circle-triangle-e"])[1]').click();
    //     await page.locator('(//span[@class="ui-icon ui-icon-circle-triangle-e"])[1]').click();
    // await page.getByRole('link', { name: '17' }).click();

        await page.locator('#datepicker2').click();
        await page.locator("select[title='Change the month']").selectOption({index: 3});
       await page.locator("select[title='Change the year']").selectOption("2023");
       await page.getByRole('link', { name: '17' }).click();


       


})

test('press key', async ({ page }) => {
  

  await page.goto('https://practice.expandtesting.com/login')
  await page.locator("#username").click()
  await page.keyboard.type("practice")
  await page.locator("#password").click()
  await page.keyboard.type("SuperSecretPassword!")
  await page.locator("button[type='submit']").press('Enter')
  await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!")
})


test("upload file", async ({ page }) => {


    await page.goto('https://demo.automationtesting.in/FileUpload.html')
    // one file uplaod
    // await page.locator('#input-4').setInputFiles('tests/files/file-1.txt')
    // multiple file upload
        await page.locator('#input-4').setInputFiles(['tests/files/file-1.txt', 'tests/files/file-2.txt'])

    await page.locator("button[title='Upload selected files']").click()

    // assertion
// await expect(page.locator('div[title="file_1.txt"])"')).toBeVisible()
        await page.locator('#input-4').setInputFiles([])

})

test('drag and drop', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/drag-and-drop-circles")
    const redCircle = page.locator('.red')
    const greenCircle = page.locator('.green')
    const dragTarget = page.locator('#target')

    await redCircle.hover()
    await page.mouse.down()
    await dragTarget.hover()
    await page.mouse.up()

    await greenCircle.dragTo(dragTarget)
})

test('slider', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/horizontal-slider")
    const slider = page.locator('input[max="5.0"]')
    await slider.evaluate((el: HTMLInputElement) => {
        el.setAttribute('value', '3.0')
    }
    )
    await page.pause()

})

})