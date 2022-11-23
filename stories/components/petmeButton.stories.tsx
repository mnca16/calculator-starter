import { PetmeButton } from "../../components/PetmeButton"
import { within, userEvent } from "@storybook/testing-library"
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { expect } from "@storybook/jest"

//Default export to visualize story on storybook interface
export default {
    title: "components/PetmeButton",
    component: PetmeButton,
} as ComponentMeta<typeof PetmeButton> // ComponentMeta automatically infers the props from Button

//Common template defined which receives args and passes down to component
const TemplatePetmeButton: ComponentStory<typeof PetmeButton> = (args) => <PetmeButton {...args}/>

//Stories 
export const Default = TemplatePetmeButton.bind({})
Default.args = {
    label: "Pet me!"
}

export const Interaction = TemplatePetmeButton.bind({})
Interaction.args = {
    label: "Pet me!"
}
Interaction.play = async ({canvasElement}) => {
    const canvas = within(canvasElement)

    //simulation
    await userEvent.click(canvas.getByRole("button"))

    //assertion with jest (DOM structure)
    const getResults = canvasElement.querySelector("#show-results") as HTMLElement 
    if (getResults !== null) {
      await expect(getResults?.innerText).toBe("Woof Woof!")
    }
}

export const ButtonControls = TemplatePetmeButton.bind({})
ButtonControls.args = {
    label: "Different label",
    primary: true,
    variant: "contained",
    color: "red", 
    size: "small", 
}

