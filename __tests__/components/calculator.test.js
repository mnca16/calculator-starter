import "@testing-library/jest-dom"
import {
  render,
  screen,
  fireEvent,
  waitForElement,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Calculator from "../../components/Calculator"

describe("Calculator component Elements", () => {
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

  it("should be able to render selector", async () => {
    render(<Calculator />)

    const selectOperation = screen.getByRole("combobox")
    expect(selectOperation).toBeInTheDocument()

    const selectOperationDefault = screen.getByRole("option", { name: "Op" })
    expect(selectOperationDefault.selected).toBe(true)

    //Operation length
    expect(screen.getAllByRole("option").length).toBe(5)
  })
})

describe("Calculator Component functionality", () => {
  it("should be able to type on input fields", async () => {
    render(<Calculator />)

    const inputFieldFirst = screen.getByLabelText(/First Number/i)
    fireEvent.change(inputFieldFirst, { target: { value: "3" } })
    expect(inputFieldFirst.value).toBe("3")

    const inputFieldSecond = screen.getByLabelText(/Second Number/i)
    fireEvent.change(inputFieldSecond, { target: { value: "2" } })
    expect(inputFieldSecond.value).toBe("2")
  })

  it("should allow user to change operation", () => {
    render(<Calculator />)
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole("combobox"),
      // Find and select the add option, like a real user would.
      screen.getByRole("option", { name: "+" })
    )

    const selectOperation = screen.getByRole("option", { name: "+" })
    expect(selectOperation.value).toBe("add")
  })

  // it.only("should be able to add two numbers", async () => {
  //   render(<Calculator />)

  //   const inputFieldFirst = screen.getByLabelText(/First Number/i)
  //   fireEvent.change(inputFieldFirst, { target: { value: "3" } })
  //   console.log("inputFieldFisrt", inputFieldFirst.value)

  //   const inputFieldSecond = screen.getByLabelText(/Second Number/i)
  //   fireEvent.change(inputFieldSecond, { target: { value: "2" } })
  //   console.log("inputFieldSecond", inputFieldSecond.value)

  //   const selectOperation = screen.getByRole("combobox")
  //   fireEvent.click(selectOperation, { option: { name: "add" } })

  //   const buttonElement = screen.getByRole("button")
  //   fireEvent.click(buttonElement)

  //   const result = screen.findByTestId("result-id")
  //   expect(result.textContent).toBe("5")
  // })
})
