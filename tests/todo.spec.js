const {test,expect} =require('@playwright/test')
test("Text field is cleared when item is added", async ({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc/#/")
    await page.locator(".new-todo").fill("water the plant")
    await page.locator(".new-todo").press('Enter')
    await expect(page.locator(".new-todo")).toBeEmpty()
    await page.locator(".toggle").first().click()
    await expect(page.locator(".toggle")).toBeChecked()
    await page.locator("[href*='completed']").click()
    await expect(page.locator(".toggle")).toBeChecked()
    await page.locator(".clear-completed").click()
    await expect(page.locator(".new-todo")).toBeEmpty()



}) 
