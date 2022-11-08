const { test, expect } = require("@playwright/test") // --> Module

test.describe("Calculator - operation functionality with integer numbers", () => {
  test("Add Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "3")
    await page.type("#second", "4")
    await page.click("#operation")
    //locates html element
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("7")

    //another way to write lines 13 and 14
    // await expect(page.locator(#result)).toContainText("7")

    //another way to write line 6 and 7
    //+await page.locator("#fist").type("3")
  })

  test("Subtract Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "4")
    await page.type("#second", "2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("2")
  })

  test("Multiply Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "6")
    await page.type("#second", "2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("12")
  })

  test("Divide Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "6")
    await page.type("#second", "2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText("3")
  })
})

test.describe("Calculator - operation functionality with negative integer numbers", () => {
  test("Add Opearion with two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-8")
    await page.type("#second", "-6")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("-14")
  })

  test("Add Opearion with with a negative and a postive number", async ({
    page,
  }) => {
    await page.goto("/")
    await page.type("#first", "5")
    await page.type("#second", "-7")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("-2")
  })

  test("Subtract Opearion with two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-9")
    await page.type("#second", "-4")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("-5")
  })

  test("Subtract Opearion with a negative and a postive number", async ({
    page,
  }) => {
    await page.goto("/")
    await page.type("#first", "4")
    await page.type("#second", "-2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("6")
  })

  test("Multiply Opearion with two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-9")
    await page.type("#second", "-5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("45")
  })

  test("Multiply Opearion with a negative and a postive number", async ({
    page,
  }) => {
    await page.goto("/")
    await page.type("#first", "-8")
    await page.type("#second", "2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("-16")
  })

  test("Divide Opearion with two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-9")
    await page.type("#second", "-3")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("3")
  })

  test("Divide Opearion with a negative and a positive number", async ({
    page,
  }) => {
    await page.goto("/")
    await page.type("#first", "-8")
    await page.type("#second", "2")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')
    const result = page.locator("#result")
    await expect(result).toContainText("-4")
  })
})

test.describe("Calculator - operation functionality with float numbers", () => {
  test("Add Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "3.5")
    await page.type("#second", "4.5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${3.5 + 4.5}`)
  })

  test("Subtract Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "4.6")
    await page.type("#second", "2.8")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${4.6 - 2.8}`)
  })

  test("Multiply Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "6.3")
    await page.type("#second", "2.7")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${6.3 * 2.7}`)
  })

  test("Divide Opearion ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "6.8")
    await page.type("#second", "2.5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${6.8 / 2.5}`)
  })
})

test.describe("Calculator - operation functionality with  negative float numbers", () => {
  test("Add Opearion with two negative numbers ", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-3.5")
    await page.type("#second", "-4.5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${-3.5 + -4.5}`)
  })

  test("Add Opearion with a positve and negative number", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "3.5")
    await page.type("#second", "-4.5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("add")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${3.5 + -4.5}`)
  })

  test("Subtract Opearion two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-3.6")
    await page.type("#second", "-1.8")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${-3.6 - -1.8}`)
  })

  test("Subtract Opearion with a positive and negative", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "4.6")
    await page.type("#second", "-3.8")
    await page.click("#operation")
    await page.locator("#operation").selectOption("subtract")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${4.6 - -3.8}`)
  })

  test("Multiply Opearion with two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-8.6")
    await page.type("#second", "-4.5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${-8.6 * -4.5}`)
  })

  test("Multiply Opearion with a negative and a positive number", async ({
    page,
  }) => {
    await page.goto("/")
    await page.type("#first", "-7.2")
    await page.type("#second", "3.5")
    await page.click("#operation")
    await page.locator("#operation").selectOption("multiply")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${-7.2 * 3.5}`)
  })

  test("Divide Opearion with two negative numbers", async ({ page }) => {
    await page.goto("/")
    await page.type("#first", "-10.6")
    await page.type("#second", "-2.8")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${-10.6 / -2.8}`)
  })

  test("Divide Opearion with a positive and a negative numer", async ({
    page,
  }) => {
    await page.goto("/")
    await page.type("#first", "8.4")
    await page.type("#second", "-3.7")
    await page.click("#operation")
    await page.locator("#operation").selectOption("divide")
    await page.click('button[type="submit"]')

    const result = page.locator("#result")
    await expect(result).toContainText(`${8.4 / -3.7}`)
  })
})
