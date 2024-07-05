import { ApiOption } from "./ApiOption";
export default{
    title: 'atoms/ApiOption',
    component: ApiOption
}

const Template = (arg) =><ApiOption {...arg}/>


export const Default = Template.bind({})

Default.args = {
    text: 'get all roles',
}
