import "@testing-library/jest-dom"
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react"
import AnotherPage from "../../pages/another-page"
import axiosMock from "axios"

afterEach(cleanup)

// describe("Another page elements", () => {
//   test("Should render pet me button", () => {
//     render(<AnotherPage />)
//     const button = screen.getByRole("button", { name: "Pet me!" })
//     expect(button).toBeInTheDocument()
//   })

//   it("should render 'Woof Woof!' when click on button", async () => {
//     render(<AnotherPage />)
//     const buttonElement = screen.getByRole("button", { name: "Pet me!" })
//     fireEvent.click(buttonElement)

//     const typograpgyH2Element = await screen.findByTestId("text-id")
//     expect(typograpgyH2Element).toHaveTextContent("Woof Woof!")
//   })
// })

// describe("Mock axios API - dog images", () => {
//   it("Should render dog's avatar everytime the page is refresh ", async () => {
//     axiosMock.get.mockResolvedValueOnce({
//       data: {
//         message: [
//           "https://images.dog.ceo/breeds/terrier-patterdale/dog-1268559_640.jpg",
//           "https://images.dog.ceo/breeds/entlebucher/n02108000_1844.jpg",
//           "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4566.jpg",
//           "https://images.dog.ceo/breeds/mastiff-bull/n02108422_4793.jpg",
//         ],
//         status: "success",
//       },
//     })

//     await act(async () => render(<AnotherPage />))

//     expect(axiosMock.get).toHaveBeenCalledTimes(3)
//   })
// })
