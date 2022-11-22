import React from 'react'
import DogList from "../../components/DogList"
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: "Components/DogList", 
    component: DogList
} as ComponentMeta<typeof DogList>

const DogListTemplate: ComponentStory<typeof DogList> = (args) => <DogList {...args}/>

export const Default = DogListTemplate.bind({})
Default.args = {dogAvatar: [
    "https://images.dog.ceo/breeds/golden/golden-1.jpeg",
    "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1963.jpg",
    "https://images.dog.ceo/breeds/eskimo/n02109961_2317.jpg",
    "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
]}