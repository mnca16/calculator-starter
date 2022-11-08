import path from "path"
const { devices } = require("@playwright/test")

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`

const config = {
  fullyParallel: true,

  // expect: {
  //   timeout: 5000,
  // },

  // Timeout per test
  timeout: 30 * 9000,

  // Test directory
  testDir: "./tests/", //testDir: path.join(__dirname, "e2e"), // testDir: "./e2e/",

  // If a test fails, retry it additional 2 times --> helpful for "flaky tests"
  retries: 3,

  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: "test-results/",

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    // Use baseURL so to make navigations relative.
    baseURL,

    //headless true opens your browser, headless false does not
    //headless: true / false

    // Retry a test if its failing with enabled tracing. This allows you to analyse the DOM, console logs, network traffic etc.
    trace: "retry-with-trace",

    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    // contextOptions: {
    //   ignoreHTTPSErrors: true,
    // },
  },

  projects: [
    {
      name: "chromium",
      testMatch: /tests\/(api)\/.*(test|spec)\.(js|ts|mjs)/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "chromium",
      testMatch: /tests\/(e2e)\/.*(test|spec)\.(js|ts|mjs)/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      testMatch: /tests\/(e2e)\/.*(test|spec)\.(js|ts|mjs)/,
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // Test against mobile viewports.
    // {
    //   name: "Mobile Chrome",
    //   use: {
    //     ...devices["Pixel 5"],
    //   },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: devices["iPhone 12"],
    // },
  ],
}
export default config
