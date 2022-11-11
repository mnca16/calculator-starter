import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import AnotherPage from "../../pages/another-page"

describe("Another page elements", () => {
  it("Should render button", () => {
    render(<AnotherPage />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("should render 'Hello There' when click on button", async () => {
    render(<AnotherPage />)
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)

    const typograpgyH2Element = await screen.findByTestId("text-id")
    expect(typograpgyH2Element).toHaveTextContent("Hello There")
  })
})
