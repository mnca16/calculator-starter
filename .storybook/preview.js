import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { initialize, mswDecorator } from "msw-storybook-addon"
import { setupWorker, rest } from "msw"

initialize()

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

// if (typeof global.process === "undefined") {
//   const worker = setupWorker(
//     rest.get("http://localhost/api/calculate/*", (req, res, ctx) => {
//       return res(ctx.json({ result: "20" }))
//     })
//   )
//   worker.start()
// }

export const decorators = [mswDecorator, withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
