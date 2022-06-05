import React, {useState} from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Rating from './components/Rating'
import {OnOff} from './components/OnOff'

function App() {

    let [isOn, setIsOn] = useState(false)

    const turnOnOff = () => {
        setIsOn(!isOn)
    }
    return (
        <div>
            <PageTitle title="This is APP"/>
            Article 1
            <Accordion titleValue="Menu" collapsed/>
            <Rating value={3}/>
            <hr/>
            Article 2
            <Accordion titleValue="Users" collapsed={false}/>
            <Rating value={4}/>
            <OnOff isOn={isOn} turnOnOff={turnOnOff}/>
        </div>
    )
}


type TitlePropsType = {
    title: string
}

function PageTitle(props: TitlePropsType) {
    return <h1> {props.title}</h1>
}

export default App
