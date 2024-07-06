const {test,expect} =require('@playwright/test')
test("ext field is cleared when item is added", async ({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc/#/")
    await page.fill(".new-todo","water the plant")
   
}) 
