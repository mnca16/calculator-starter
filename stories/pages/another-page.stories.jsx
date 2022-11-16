import React from "react";
import { rest } from "msw";
import  AnotherPage, {getStaticProps} from "../../pages/another-page"



export default {
    title: "Pages/ AnotherPage",
    component:  AnotherPage,
}


const dogAvatar = [
    "https://images.dog.ceo/breeds/golden/golden-1.jpeg",
    "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1963.jpg",
    "https://images.dog.ceo/breeds/eskimo/n02109961_2317.jpg",
    "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
]

export const TemplateAnotherPage = (args, { loaded: {message}}) => <AnotherPage {...args} message={message}/>
TemplateAnotherPage.args = {message: dogAvatar};
TemplateAnotherPage.loaders = [
    async () => {
        let data = await getStaticProps()
        return data.props
    
    }
]

//export const AnotherPageStory = () => <AnotherPage/>

