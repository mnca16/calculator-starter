import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../../components/Header"

describe("Should render header navigation buttons ", () => {
  it("Should render home button and followers button", () => {
    render(<Header />)
    const homeButton = screen.getByTestId("home-button")
    const followersButton = screen.getByTestId("followers-button")

    expect(homeButton).toBeInTheDocument()
    expect(followersButton).toBeInTheDocument()
  })
})
