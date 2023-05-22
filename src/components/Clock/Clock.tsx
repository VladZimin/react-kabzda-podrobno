import React, {FC, useEffect, useState} from 'react'
import {DigitalClockView} from './DigitalClockView'
import {AnalogClockView} from './AnalogClockView'

type PropsType = {
    mode: 'analog' | 'digital'
}
export const Clock: FC<PropsType> = ({mode}) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view
    switch (mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return view
}

export type ViewClockPropsType = {
    date: Date
}


