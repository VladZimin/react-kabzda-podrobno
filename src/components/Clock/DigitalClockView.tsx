import React, {FC} from 'react'
import {ViewClockPropsType} from './Clock'

export const DigitalClockView: FC<ViewClockPropsType> = ({date}) => {
    const getTwoDigitTime = (num: number) => num < 10 ? '0' + num : num
    return <div>
        <span>{getTwoDigitTime(date.getHours())}</span>
        :
        <span>{getTwoDigitTime(date.getMinutes())}</span>
        :
        <span>{getTwoDigitTime(date.getSeconds())}</span>
    </div>
}