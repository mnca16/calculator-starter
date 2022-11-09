const { test, expect } = require("@playwright/test")

test.describe("Basic API testing with valid input", () => {
  test("simple addition", async ({ request }) => {
    const result = await request.get("/api/calculate/add/2/2", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 4 })
  })

  test("simple subtaction", async ({ request }) => {
    const result = await request.get("/api/calculate/subtract/6/3", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 3 })
  })

  test("simple multiplication", async ({ request }) => {
    const result = await request.get("/api/calculate/multiply/6/3", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 18 })
  })

  test("simple division", async ({ request }) => {
    const result = await request.get("/api/calculate/divide/10/2", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 5 })
  })
})
