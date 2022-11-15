const { test, expect } = require("@playwright/test") // --> Module

async function operationTest(page, first, second, type) {
  await page.goto("/")
  await page.type("#first", first)
  await page.type("#second", second)
  await page.click("#operation")
  await page.locator("#operation").selectOption(type)
  await page.click('button[type="submit"]')
}

test.describe(
  "Calculator - operation functionality with integer numbers",
  () => {
    test("Add Opearion ", async ({ page }) => {
      operationTest(page, "3", "4", "add")

      const result = page.locator("#result")
      await expect(result).toContainText("7")
    })

    test("Subtract Opearion ", async ({ page }) => {
      operationTest(page, "4", "2", "subtract")

      const result = page.locator("#result")
      await expect(result).toContainText("2")
    })

    test("Multiply Opearion ", async ({ page }) => {
      operationTest(page, "6", "2", "multiply")

      const result = page.locator("#result")
      await expect(result).toContainText("12")
    })

    test("Divide Opearion ", async ({ page }) => {
      operationTest(page, "9", "3", "divide")

      const result = page.locator("#result")
      await expect(result).toContainText("3")
    })
  }
)

test.describe("Calculator - operation functionality with float numbers", () => {
  test("Add Opearion ", async ({ page }) => {
    operationTest(page, "3.5", "4.5", "add")

    const result = page.locator("#result")
    await expect(result).toContainText(`${3.5 + 4.5}`)
  })

  test("Subtract Opearion ", async ({ page }) => {
    operationTest(page, "4.6", "2.8", "subtract")

    const result = page.locator("#result")
    await expect(result).toContainText(`${4.6 - 2.8}`)
  })

  test("Multiply Opearion ", async ({ page }) => {
    operationTest(page, "6.3", "2.7", "multiply")

    const result = page.locator("#result")
    await expect(result).toContainText(`${6.3 * 2.7}`)
  })

  test("Divide Opearion ", async ({ page }) => {
    operationTest(page, "6.8", "2.5", "divide")

    const result = page.locator("#result")
    await expect(result).toContainText(`${6.8 / 2.5}`)
  })
})

test.describe("Calculator - error message", () => {
  test("invalid params with addition operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#second", "3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(
      `Query params should have 3 items. Received 2: add,3`
    )
  })
})
