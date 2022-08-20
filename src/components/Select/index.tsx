import React, {FC, useState} from 'react'

import s from './Select.module.css'

export type UserType = {
    id: number
    name: string
}

export type SelectType = {
    id?: number
    onChange: (value: number) => void
    users: UserType[]
}

export const Select: FC<SelectType> = React.memo(({id, users, onChange}) => {

    console.log('SELECT')

    const [active, setActive] = useState(false)
    const [hoveredItemId, setHoveredItemId] = useState(id)
    const selectedUser = users.find((_, i) => i === id)
    const hoveredItem = users.find(u => u.id === hoveredItemId)

    const toggleSelectHandler = () => {
        setActive(!active)
    }

    const onClickItemHandler = (id: number) => {
        onChange(id)
        setActive(false)
    }

    const onHoverItem = (id: number) => {
        setHoveredItemId(id)
    }

    return (
        <div className={s.select}>
            <span onClick={toggleSelectHandler} className={s.main}>{selectedUser && selectedUser.name}</span>
            {
                active && <div className={s.users}>
                    {users.map(u => <div key={u.id} onClick={() => onClickItemHandler(u.id)}
                                         onMouseEnter={() => onHoverItem(u.id)}
                                         className={`${s.item} ${hoveredItem === u ? s.selected : ''}`}>{u.name}</div>)}
                </div>
            }
        </div>
    )
})







