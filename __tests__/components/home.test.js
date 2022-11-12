//Testinf calculator component with react testing library
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "../../pages/index.js"

describe("Simple tests to grab elements of Home component with different query methods", () => {
  it("should render The Amazing Calculator text from Home component", () => {
    render(<Home />)
    const typographyH2Element = screen.getByText(/The Amazing Calculator/i)
    expect(typographyH2Element).toBeInTheDocument()
  })

  it("should render The Amazing Calculator text from Home component by role", () => {
    render(<Home />)
    //when there is more than one element we add an object with the property name
    const typographyH2Element = screen.getByRole("heading", {
      name: "The Amazing Calculator",
    })
    expect(typographyH2Element).toBeInTheDocument()
  })

  // it("should render 'click me button' by tittle", () => {
  //   render(<Home />)
  //   const clickeMeButton = screen.getByTitle("button")
  //   expect(clickeMeButton).toBeInTheDocument()
  // })

  it("should render The Amazing Calculator text from Home component by id", () => {
    render(<Home />)
    const typographyWithId = screen.getByTestId("header-text")
    expect(typographyWithId).toBeInTheDocument()
  })
})
