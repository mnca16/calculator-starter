import React from "react";
import { rest, setupWorker } from "msw";
//import { whitin, userEvent, findByRole } from "@storybook/testing-library"
//import { expect } from "@storybook/jest";
import Home from "../../pages/index"



export default {
    title: "Pages/Home",
    component: Home,
}

export const HomePage = () => <Home/>
HomePage.parameters = {
    msw: {
      handlers: [
        rest.get('/api/calculate/*', (req, res, ctx) => {
          return res(ctx.json({result: "20"}));
        }),
      ],
    },
};



// const TemplateHome = (args) => <Home {...args}/>  

// export const HomePage = TemplateHome.bind({})
// HomePage.parameters = {
//     msw: {
//       handlers: [
//         rest.get("http://localhost/api/calculate/*", (req, res, ctx) => {
//           return res(ctx.json({result: "20"}));
//         }),
//       ],
//     },
   
// };


