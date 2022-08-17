import React, {useState} from 'react'
import {Select} from './index'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'Select',
    component: Select
} as ComponentMeta<typeof Select>

export const SelectWithState: ComponentStory<typeof Select> = (args) => {
    const [userId, setUserId] = useState(2)
    const users = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Vanya'},
        {id: 3, name: 'Denis'},
    ]
    return <Select id={userId} users={users} onChange={setUserId}/>
}
