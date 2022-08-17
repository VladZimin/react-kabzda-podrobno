import React from 'react'
import {Accordion} from './index'
import {ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'

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
    },
    users: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Vanya'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Viktor'},
    ],
    onClick: action('selected user name')
}