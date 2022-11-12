import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import DogList from "../../components/DogList"

describe("should render dogList elements ", () => {
  it("Should receiver dog's avatar prop", async () => {
    const dogAvatar = [
      "https://images.dog.ceo/breeds/golden/golden-1.jpeg",
      "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1963.jpg",
      "https://images.dog.ceo/breeds/eskimo/n02109961_2317.jpg",
      "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
    ]
    render(<DogList dogAvatar={dogAvatar} />)
    const dogsAvatar = await waitFor(() => screen.getByTestId("avatar"))

    setTimeout(() => {
      expect(dogsAvatar).toBeInTheDocument()
    }, 1000)
  })
})
