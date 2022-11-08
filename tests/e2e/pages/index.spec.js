const { test, expect } = require("@playwright/test") // --> Module

async function operationTest(page, first, second, type) {
  await page.goto("/")
  await page.type("#first", first)
  await page.type("#second", second)
  await page.click("#operation")
  await page.locator("#operation").selectOption(type)
  await page.click('button[type="submit"]')
}

test.describe("Calculator - operation functionality with integer numbers", () => {
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
})

// test.describe("Calculator - operation functionality with negative integer numbers", () => {
//   test("Add Opearion with two negative numbers", async ({ page }) => {
//     operationTest(page, "-8", "-6", "add")

//     const result = page.locator("#result")
//     await expect(result).toContainText("-14")
//   })

//   test("Add Opearion with with a negative and a postive number", async ({
//     page,
//   }) => {
//     operationTest(page, "5", "-7", "add")

//     const result = page.locator("#result")
//     await expect(result).toContainText("-2")
//   })

//   test("Subtract Opearion with two negative numbers", async ({ page }) => {
//     operationTest(page, "-9", "-4", "subtract")

//     const result = page.locator("#result")
//     await expect(result).toContainText("-5")
//   })

//   test("Subtract Opearion with a negative and a postive number", async ({
//     page,
//   }) => {
//     operationTest(page, "4", "-2", "subtract")
//     const result = page.locator("#result")
//     await expect(result).toContainText("6")
//   })

//   test("Multiply Opearion with two negative numbers", async ({ page }) => {
//     operationTest(page, "-9", "-5", "multiply")

//     const result = page.locator("#result")
//     await expect(result).toContainText("45")
//   })

//   test("Multiply Opearion with a negative and a postive number", async ({
//     page,
//   }) => {
//     operationTest(page, "-8", "2", "multiply")

//     const result = page.locator("#result")
//     await expect(result).toContainText("-16")
//   })

//   test("Divide Opearion with two negative numbers", async ({ page }) => {
//     operationTest(page, "-9", "-3", "divide")

//     const result = page.locator("#result")
//     await expect(result).toContainText("3")
//   })

//   test("Divide Opearion with a negative and a positive number", async ({
//     page,
//   }) => {
//     operationTest(page, "-8", "2", "divide")
//     const result = page.locator("#result")
//     await expect(result).toContainText("-4")
//   })
// })

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

// test.describe("Calculator - operation functionality with  negative float numbers", () => {
//   test("Add Opearion with two negative numbers ", async ({ page }) => {
//     operationTest(page, "-3.5", "-4,5", "add")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${-3.5 + -4.5}`)
//   })

//   test("Add Opearion with a positve and negative number", async ({ page }) => {
//     operationTest(page, "3.5", "-4.5", "add")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${3.5 + -4.5}`)
//   })

//   test("Subtract Opearion two negative numbers", async ({ page }) => {
//     operationTest(page, "-3.6", "-1.8", "subtract")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${-3.6 - -1.8}`)
//   })

//   test("Subtract Opearion with a positive and negative", async ({ page }) => {
//     operationTest(page, "4.6", "-3.8", "subtract")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${4.6 - -3.8}`)
//   })

//   test("Multiply Opearion with two negative numbers", async ({ page }) => {
//     operationTest(page, "-8.6", "-4.5", "multiply")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${-8.6 * -4.5}`)
//   })

//   test("Multiply Opearion with a negative and a positive number", async ({
//     page,
//   }) => {
//     operationTest(page, "-7.2", "3.5", "multiply")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${-7.2 * 3.5}`)
//   })

//   test("Divide Opearion with two negative numbers", async ({ page }) => {
//     operationTest(page, "-10.6", "-2.8", "divide")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${-10.6 / -2.8}`)
//   })

//   test("Divide Opearion with a positive and a negative numer", async ({
//     page,
//   }) => {
//     operationTest(page, "8.4", "-3.7", "divide")

//     const result = page.locator("#result")
//     await expect(result).toContainText(`${8.4 / -3.7}`)
//   })
// })

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
