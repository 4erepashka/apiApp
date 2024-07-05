import {RoleField} from './RoleField'
export default{
    title: 'atoms/RoleField',
    component: RoleField
}

const Template = (arg) =><RoleField {...arg}/>


export const SystemAnalyst = Template.bind({})

SystemAnalyst.args = {
    text: 'Системный аналитик',
}

export const JavaDeveloper = Template.bind({})

JavaDeveloper.args = {
    text: 'Разработчик Java',
}

export const JsDeveloper = Template.bind({})

JavaDeveloper.args = {
    text: 'Разработчик JS/React',
}
export const QaDeveloper = Template.bind({})

QaDeveloper.args = {
    text: 'Тестировщик',
}

export const adminDeveloper = Template.bind({})

adminDeveloper.args = {
    text: 'Прикладной администратор',
}


