const { test, expect } = require("@playwright/test") // --> Module

async function operationTest(page, first, second, type) {
  await page.goto("/")
  await page.type("#first", first)
  await page.type("#second", second)
  await page.click("#operation")
  await page.locator("#operation").selectOption(type)
  await page.click('button[type="submit"]')
}

//Note:
/*
How do I eliminate the flaky tests? I notice that the async function was not getting all the params 
and the test would fail because it would receive just two params. 

so I put an await before I called the function:  await operationTest(page, "3", "4", "add")
and I deleted the constant result and put the locator inside the expect 
*/

test.describe(
  "Calculator - operation functionality with integer numbers",
  () => {
    test("Add Opearion ", async ({ page }) => {
      await operationTest(page, "3", "4", "add")
      await expect(page.locator("#result")).toContainText("7")
    })

    test("Subtract Opearion ", async ({ page }) => {
      await operationTest(page, "4", "2", "subtract")
      await expect(page.locator("#result")).toContainText("2")
    })

    test("Multiply Opearion ", async ({ page }) => {
      await operationTest(page, "6", "2", "multiply")
      await expect(page.locator("#result")).toContainText("12")
    })

    test("Divide Opearion ", async ({ page }) => {
      await operationTest(page, "9", "3", "divide")
      await expect(page.locator("#result")).toContainText("3")
    })
  }
)

test.describe("Calculator - operation functionality with float numbers", () => {
  test("Add Operation ", async ({ page }) => {
    await operationTest(page, "3.5", "4.5", "add")
    await expect(page.locator("#result")).toContainText("8")
  })

  test("Subtract Opearion ", async ({ page }) => {
    await operationTest(page, "4.6", "2.8", "subtract")
    await expect(page.locator("#result")).toContainText(`1.7999999999999998`)
  })

  test("Multiply Opearion ", async ({ page }) => {
    await operationTest(page, "6.3", "2.7", "multiply")
    await expect(page.locator("#result")).toContainText(`17.01`)
  })

  test("Divide Opearion ", async ({ page }) => {
    await operationTest(page, "6.8", "2.5", "divide")
    await expect(page.locator("#result")).toContainText(`2.7199999999999998`)
  })
})

test.describe("Calculator - error message", () => {
  test("invalid params with addition operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#second", "3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    await expect(page.locator("#result")).toContainText(
      `Query params should have 3 items. Received 2: add,3`
    )
  })

  test("invalid operation", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "1")
    await page.type("#second", "1")
    await page.click("#operation")
    await page.locator("#operation").selectOption("")
    await page.click('button[type="submit"]')

    await expect(page.locator("#result")).toContainText(
      `Query params should have 3 items. Received 2: 1,1`
    )
  })
})
