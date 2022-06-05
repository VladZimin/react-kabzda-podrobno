import React from 'react'

import s from './OnOff.module.css'

type PropsType = {
    isOn: boolean
    turnOnOff: () => void
}

export const OnOff = (props: PropsType) => (
    <div className={s.onOffWrapper}>
        <div className={`${s.greenBlock} ${props.isOn && s.greenBg}`}>GREEN</div>
        <div className={`${s.redBlock} ${!props.isOn && s.redBg}`}>RED</div>
        <div onClick={props.turnOnOff} className={`${s.onOffCircle} ${props.isOn ? s.greenBg : s.redBg}`}>On/Off</div>
    </div>
)

