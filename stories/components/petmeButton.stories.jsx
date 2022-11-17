import PetmeButton from "../../components/PetmeButton"
import { within, userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"

//Default export to visualize story on storybook interface
export default {
    title: "components/PetmeButton",
    component: PetmeButton,
}

//Defining story template
const TemplatePetmeButton = (args) => <PetmeButton {...args}/>

//Stories 
export const Default = TemplatePetmeButton.bind({})


 

export const Interaction = TemplatePetmeButton.bind({})
Interaction.play = async ({canvasElement}) => {
    const canvas = within(canvasElement)

    //simulation
    await userEvent.click(canvas.getByRole("button"))

    //assertion with jest (DOM structure)
    await expect(canvasElement.querySelector("#show-results").innerText).toBe("Woof Woof!")
}

export const ButtonControls = TemplatePetmeButton.bind({})
ButtonControls.args = {
    primary: true,
    variant: "contained",
    color: "red",
    label: "Pet me!", 
    size: "small"
}

