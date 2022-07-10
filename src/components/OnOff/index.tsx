import React, {FC} from 'react'

import s from './OnOff.module.css'

export type OnOffPropsType = {
    isOn: boolean
    setIsOn: (value: boolean) => void
}

export const OnOff: FC<OnOffPropsType> = ({isOn, setIsOn}) => {

    return (
        <div className={s.onOffWrapper}>
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
        </div>
    )
}







