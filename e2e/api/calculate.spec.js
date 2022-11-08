const { test, expect } = require("@playwright/test")

test.describe("Basic API testing", () => {
  test.only("simple addition", async ({ request }) => {
    const result = await request.get("/api/calculate/add/2/2", {})
    expect(result.ok()).toBeTruthy()
    expect(await result.json()).toEqual({ result: 4 })
  })
})
