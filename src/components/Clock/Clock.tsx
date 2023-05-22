import React, {FC, useEffect, useState} from 'react'

type PropsType = {}
export const Clock: FC<PropsType> = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const getTwoDigitTime = (num: number) => num < 10 ? '0' + num : num

    return (
        <div>
            <span>{getTwoDigitTime(date.getHours())}</span>
            :
            <span>{getTwoDigitTime(date.getMinutes())}</span>
            :
            <span>{getTwoDigitTime(date.getSeconds())}</span>
        </div>
    )
}


