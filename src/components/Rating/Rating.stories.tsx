import React from 'react'
import {Rating} from './index'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Rating',
    component: Rating
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>

export const RatingCountStar = Template.bind({})
RatingCountStar.args = {
    setStarCount: action('change star count'),
    starCount: 4
}