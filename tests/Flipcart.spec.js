const { test, expect } = require('@playwright/test')    
test('place order ', async ({ browser }) => {
    let newPage;
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.locator("[placeholder*='Search']").pressSequentially("ipho", { delay: 200 })
    const searchText = page.locator("._3D0G9a")
    const productName = "iphone 15 pro"
    await searchText.first().waitFor()
    for (let i = 0; i < await searchText.count(); ++i) {
        if (await searchText.nth(i).textContent() === productName) {
            await searchText.nth(i).locator("a").click()
            break
        }

    }
    await expect(page.locator(".BUOuZu span")).toHaveText(productName)
    const searchProductResults = page.locator(".cPHDOP .tUxRFH .KzDlHZ")
    const searchProductName = "Apple iPhone 15 Pro (White Titanium, 256 GB)"
    await searchProductResults.first().waitFor()
    console.log(await searchProductResults.allTextContents())
    for (let i = 0; i < await searchProductResults.count(); ++i) {
        if (await searchProductResults.nth(i).textContent() === searchProductName) {
            [newPage] = await Promise.all([
                context.waitForEvent('page'),
                await searchProductResults.nth(i).click()
            ])
            break;
        }
    }
    await expect(newPage.locator(".VU-ZEz")).toHaveText(searchProductName)
    await expect(newPage.locator("div.hl05eU div.Nx9bqj").first()).toBeVisible()
    await newPage.locator("text='Add to cart'").click()
    await expect(newPage.locator(".T2CNXf")).toHaveText(searchProductName)


})
