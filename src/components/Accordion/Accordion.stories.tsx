import React from 'react'
import {Accordion} from './index'
import {ComponentStory} from '@storybook/react'

export default {
    title: 'Accordion',
    component: Accordion
}

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const MenuCollapsedSwitch = Template.bind({})
MenuCollapsedSwitch.args = {
    titleValue: 'Menu',
    isCollapsed: true,
    setIsCollapsed: () => {
    }
}