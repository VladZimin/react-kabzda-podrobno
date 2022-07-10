import React from 'react'
import {Rating} from './index'
import {ComponentStory} from '@storybook/react'

export default {
    title: 'Rating',
    component: Rating
}

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>

export const RatingCountStar = Template.bind({})
RatingCountStar.args = {
    setStarCount: () => {
    },
    starCount: 4
}