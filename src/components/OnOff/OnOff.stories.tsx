import React from 'react'
import {OnOff} from './index'
import {ComponentStory} from '@storybook/react'

export default {
    title: 'OnOff',
    component: OnOff
}

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>

export const OnOffSwitch = Template.bind({})
OnOffSwitch.args = {
    isOn: true,
    setIsOn: () => {
    }
}