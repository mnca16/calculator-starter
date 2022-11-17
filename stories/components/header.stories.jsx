import Header from "../../components/Header"

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

}

const TemplateHeader = (args) => <Header {...args}/>

export const HedaerComponent = () => <Header/>