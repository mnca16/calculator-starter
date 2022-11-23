import Header from "../../components/Header"
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "Components/Header",
    component: Header,
    //Component parameters
    parameters: {
        backgrounds: {
          values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
            { name: 'blue', value: '#00f' },
          ],
        },
      },

} as ComponentMeta<typeof Header>

const TemplateHeader: ComponentStory<typeof Header> = (args) => <Header/>

export const Default =  TemplateHeader.bind({})