import React, {ChangeEvent, useState} from 'react'

export default {
    title: 'Example/Input',
}

export const ControlledInput = () => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <input type={'text'} value={value} onChange={onChangeHandler}/>
    )
}

export const ControlledCheckbox = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <input type={'checkbox'} checked={checked} onChange={onChangeHandler}/>
    )
}

export const ControlledSelect = () => {

    const [value, setValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Yekaterinburg</option>
            <option value={'2'}>Bishkek</option>
            <option value={'3'}>Moscow</option>
        </select>
    )
}
