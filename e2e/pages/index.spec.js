const { test, expect } = require("@playwright/test")

test("basic calculator functionality", async ({ page }) => {
  await page.goto("/")
  await page.type("#first", "3")
  await page.type("#second", "4")
  await page.click("#operation")
  await page.locator("#operation").selectOption("add")
  await page.click('button[type="submit"]')

  const result = page.locator("#result")
  await expect(result).toContainText("7")
})
