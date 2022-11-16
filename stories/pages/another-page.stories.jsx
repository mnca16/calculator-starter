import React from "react";
// import { rest } from "msw";
// import { whitin, userEvent, findByRole } from "@storybook/testing-library"
//import { expect } from "@storybook/jest";
import  AnotherPage from "../../pages/another-page"
//import { HPlusMobiledata } from "@mui/icons-material";


export default {
    title: "Pages/ AnotherPage",
    component:  AnotherPage,
}

const TemplateAnotherPage = (args) => <AnotherPage {...args}/>

export const AnotherPageStory = () => <AnotherPage/>