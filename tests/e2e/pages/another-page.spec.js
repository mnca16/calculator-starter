const { test, expect } = require("@playwright/test") // --> Module

//There are two ways types of pages to navigate. Pages service based and pages not service based.
test.describe("Navigation button", () => {
  test("Goes to another page when clicking on PAGE button", async ({
    page,
  }) => {
    await page.goto("/")
    await page.locator("#followers-button").click()

    //Grabs page title
    console.log(
      "pageTitle test",
      await page.locator("#title-page").textContent()
    )
    await expect(page).toHaveURL("/another-page")
  })

  test("Shows text when clicking on 'click me!' button", async ({ page }) => {
    await page.goto("/another-page")
    await page.locator("#click-me").click()
    console.log(
      "click me btn text",
      await page.locator("#show-results").textContent()
    )
    await expect(page.locator("#show-results")).toContainText("Woof Woof!")
  })
})
