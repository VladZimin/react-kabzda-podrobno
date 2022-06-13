import React, { useState } from 'react'

import s from './OnOff.module.css'


export const OnOff = () => {

    let [isOn, setIsOn] = useState(false)

    return (<div className={s.onOffWrapper}>
            <div onClick={() => {
                setIsOn(true)
            }} className={`${s.greenBlock} ${isOn && s.greenBg}`}>GREEN
            </div>
            <div onClick={() => {
                setIsOn(false)
            }} className={`${s.redBlock} ${!isOn && s.redBg}`}>RED
            </div>
            <div className={`${s.onOffCircle} ${isOn ? s.greenBg : s.redBg}`}>On/Off
            </div>
        </div>)
}







