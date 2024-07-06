const { test, expect } = require('@playwright/test')
test('new tab open ', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const link = page.locator("#opentab")
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click()
    ])

})
test('Suggestion Class Example', async ({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#autocomplete").pressSequentially("ind",{delay:100})
    const dropdown = page.locator(".ui-menu-item")
    await dropdown.first().waitFor()
    for(let i=0;i<await dropdown.count();++i){
        const text = await dropdown.nth(i).textContent()
        if(text ==="India"){
            await dropdown.nth(i).click()
            break;
        }
    }

})
