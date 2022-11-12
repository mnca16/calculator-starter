import React from "react"
import { rest } from "msw" // ---> to mock the fetch request
import { setupServer } from "msw/node" // ---> to mock the fetch request
import "@testing-library/jest-dom"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Calculator from "../../components/Calculator"
//import axiosMock from "axios"

//Set up server to test API - line 109
const server = setupServer(
  rest.get("http://localhost/api/calculate/*", async (req, res, ctx) => {
    console.log("Is this working?")
    return res(ctx.json({ result: "5" }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

afterEach(cleanup)

describe("Calculator Elements", () => {
  it("Should render button", async () => {
    render(<Calculator />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("should render input elements and labels", async () => {
    render(<Calculator />)

    const labelFieldFirst = screen.getByLabelText(/First Number/i)
    expect(labelFieldFirst).toBeInTheDocument()

    const labelFieldSecond = screen.getByLabelText(/Second Number/i)
    expect(labelFieldSecond).toBeInTheDocument()

    const inputFieldFirst = screen.getByLabelText(/First Number/i)
    expect(inputFieldFirst).toHaveAttribute("type", "text")

    const inputFieldSecond = screen.getByLabelText(/Second Number/i)
    expect(inputFieldSecond).toHaveAttribute("type", "text")
  })

  it("should be able to render selector and its length", async () => {
    render(<Calculator />)

    const selectOperation = screen.getByRole("combobox")
    expect(selectOperation).toBeInTheDocument()

    const selectOperationDefault = screen.getByRole("option", { name: "Op" })
    expect(selectOperationDefault.selected).toBe(true)

    //Operation length
    expect(screen.getAllByRole("option").length).toBe(5)
  })
})

describe("Calculator functionality", () => {
  it("should be able to type on input fields", () => {
    render(<Calculator />)

    const inputFieldFirst = screen.getByLabelText(/First Number/i)
    fireEvent.change(inputFieldFirst, { target: { value: "3" } })
    expect(inputFieldFirst.value).toBe("3")

    const inputFieldSecond = screen.getByLabelText(/Second Number/i)
    fireEvent.change(inputFieldSecond, { target: { value: "2" } })
    expect(inputFieldSecond.value).toBe("2")
  })

  describe("should allow user to change operation", () => {
    function changeUserOperation(userEventOp, selectOp, value) {
      userEvent.selectOptions(
        // Find the select element, like a real user would.
        screen.getByRole("combobox"),
        // Find and select the add option, like a real user would.
        screen.getByRole("option", { name: userEventOp })
      )

      const selectOperation = screen.getByRole("option", { name: selectOp })
      expect(selectOperation.value).toBe(value)
    }

    it("should allow user to change to addition", () => {
      render(<Calculator />)
      changeUserOperation("+", "+", "add")
    })

    it("should allow user to change to subtraction", () => {
      render(<Calculator />)
      changeUserOperation("-", "-", "subtract")
    })

    it("should allow user to change to multiplication", () => {
      render(<Calculator />)
      changeUserOperation("*", "*", "multiply")
    })

    it("should allow user to change to division", () => {
      render(<Calculator />)
      changeUserOperation("/", "/", "divide")
    })
  })
})

describe("Calculator Mock API", () => {
  it("Mock axios api call", async () => {
    // axiosMock.get.mockResolvedValueOnce({ data: { result: "5" } })

    render(<Calculator />)

    const buttonElement = screen.getByRole("button")
    userEvent.click(buttonElement)

    setTimeout(() => {
      expect(screen.findByTestId("result-id").textContent).toBe("5")
    }, 1000)

    // const result = await waitFor(() => screen.findByTestId("result-id"))
    // expect(result.textContent).toBe("5")
  })
})
