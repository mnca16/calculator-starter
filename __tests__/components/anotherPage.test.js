import "@testing-library/jest-dom"
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
  act,
} from "@testing-library/react"
import AnotherPage from "../../pages/another-page"
import axiosMock from "axios"

afterEach(cleanup)

describe("Another page elements", () => {
  it("Should render button", () => {
    render(<AnotherPage />)
    const button = screen.getByRole("button", { name: "Pet me!" })
    expect(button).toBeInTheDocument()
  })

  it("should render 'Woof Woof!' when click on button", async () => {
    render(<AnotherPage />)
    const buttonElement = screen.getByRole("button", { name: "Pet me!" })
    fireEvent.click(buttonElement)

    const typograpgyH2Element = await screen.findByTestId("text-id")
    expect(typograpgyH2Element).toHaveTextContent("Woof Woof!")
  })
})

describe("Mock axios API - dog images", () => {
  it("Should render dog's avatar everytime the page is refresh ", async () => {
    const url = "/dog.ceo/api/breeds/image/random/4"
    axiosMock.get.mockResolvedValueOnce({
      message: [
        "https://images.dog.ceo/breeds/terrier-patterdale/dog-1268559_640.jpg",
        "https://images.dog.ceo/breeds/entlebucher/n02108000_1844.jpg",
        "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4566.jpg",
        "https://images.dog.ceo/breeds/mastiff-bull/n02108422_4793.jpg",
      ],
      status: "success",
    })

    await act(async () => await render(<AnotherPage />))

    expect(axiosMock.get).toHaveBeenCalledTimes(3)
  })
})
