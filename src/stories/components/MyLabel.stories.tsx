import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel.js";

export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    // genera el archivo Docs
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['normal', 'h1', 'h2', 'h3'],
            control: {type: 'radio'}
        },
        label: {
            control: {type: 'text'}
        },
        color: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {type: 'select'}
        },
        fontColor: {
            control: {type: 'color'}
        }
    }
} as Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

// Historias
export const Basic = Template.bind({});
Basic.args = {
    label: 'weqwew',
    size: 'h1',
    allCaps: false // true: capitalizar toda la palabra
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true,
    label: 'este es un texto que se capitalizó por la bandera allCaps'
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}