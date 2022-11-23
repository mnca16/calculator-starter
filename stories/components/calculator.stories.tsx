import React from "react";
import { rest } from "msw";
import {within, userEvent, waitFor} from "@storybook/testing-library"
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {expect} from "@storybook/jest"
import  Calculator  from "../../components/Calculator";

export default {
  title: "Components/Calculator",
  component: Calculator,
  parameters: {
    msw: {
      handlers: [
        rest.get("/api/calculate/*", (req, res, ctx) => {
          console.log("req", typeof req)
          console.log("req.params from storybook", req.params)
          // if (!req.params) {
          //   return res(ctx.status(500, "no params"));
          // }
          if (req.params[0] == "//") {
            return res(
              ctx.status(500, "no params"),
              ctx.json({ message: "no params"}),
            );
          }
           
          console.log("parameters", typeof req.params[0])
          //const params = req.params[0].split("/");
          const params = (req.params[0] as string).split("/");
          console.log("params", params)
          
          //In order to get isNaN function to receive a string we need to use the Number method
          if (params.length !== 3 || isNaN(Number(params[1])) || isNaN(Number(params[2]))) {
          //  if (params.length !== 3 ) {
            return res(
              ctx.status(
                500,
                `didn't receive expected params. got: ${req.params}`
              )
            );
          }

          return res(
            ctx.json({
              result: "ok",
            })
          );
        }),
      ],
    },
  },
} as ComponentMeta<typeof Calculator>

const Template: ComponentStory<typeof Calculator> = (args) => <Calculator/> // Since Calculator component doesn't 
//have props, we don't need arguments
//const Template = (args: any) => <Calculator {...args}/>

export const Default = Template.bind({})

export const InteractionsTest = Template.bind({})
InteractionsTest.play = async({canvasElement}) => {
    const canvas = within(canvasElement)
    // "as HTMLElement" is an assertion an tells ts that form is an HTMLElement
    const form = canvasElement.querySelector("#calculator-form") as HTMLElement 
    
    // "!" is a Definite Assigment Assertion, is normally place after variables
    //to rely to ts that variable is what we intendent on doing 
    userEvent.type(form.querySelector("#first")!, "1")
    userEvent.type(form.querySelector("#second")!, "2")
    userEvent.selectOptions(form.querySelector("#operation")!, ["add"])
    userEvent.click(canvas.getByRole("button"))
    

    const resultElement = canvasElement.querySelector('#result') as HTMLElement | null
    await waitFor(() => {
        expect(resultElement?.innerText).toBe("ok")
    })
}

export const ErrorMessageTest = Template.bind({})
ErrorMessageTest.play = async({canvasElement}) => {
    const canvas = within(canvasElement)
    const form = canvasElement.querySelector("#calculator-form") as HTMLElement 
    userEvent.type(form.querySelector("#first")!, "a")
    userEvent.type(form.querySelector("#second")!, "b")
    userEvent.selectOptions(form.querySelector("#operation")!, ["add"])
    userEvent.click(canvas.getByRole("button"))

    const resultElement = canvasElement.querySelector('#result') as HTMLElement | null
    await waitFor(() => {
        expect(resultElement?.innerText).toBe( "Cannot convert object to primitive value")
    })
}

