const { test, expect } = require("@playwright/test") // --> Module

//There are two ways types of pages to navigate. Pages service based and pages not service based.
test.describe("Navigation button", () => {
  test.only("Goes to another page when clicking on PAGE button", async ({
    page,
  }) => {
    await page.goto("/")
    await page.click('button[type="button"]')

    //Grabs the page title
    console.log(
      "pageTitle test",
      await page.locator("#title-page").textContent()
    )

    const clickMe = page.locator("#click-me")
  })
})
