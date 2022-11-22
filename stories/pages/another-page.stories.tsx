import React from "react";
import  AnotherPage from "../../pages/another-page"
import { ComponentStory, ComponentMeta } from '@storybook/react';



export default {
    title: "Pages/ AnotherPage",
    component:  AnotherPage,
} as ComponentMeta<typeof AnotherPage>


const dogAvatar = [
    "https://images.dog.ceo/breeds/golden/golden-1.jpeg",
    "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1963.jpg",
    "https://images.dog.ceo/breeds/eskimo/n02109961_2317.jpg",
    "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
]

const Template: ComponentStory<typeof AnotherPage> = (args) => <AnotherPage {...args}/>
export const Default = Template.bind({})
Default.args = {avatar: dogAvatar};
