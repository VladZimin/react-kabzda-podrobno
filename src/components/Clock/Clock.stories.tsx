import React from 'react'
import {Clock} from './Clock'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Clock with useEffect',
    component: Clock
} as ComponentMeta<typeof Clock>

export const BaseExample: ComponentStory<typeof Clock> = () => <Clock/>
