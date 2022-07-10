import React, {useState} from 'react'
import './App.css'
import {OnOff} from './components/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion'
import UncontrolledRating from './components/UncontrolledRating'
import {CountStarType, Rating} from './components/Rating'
import {Accordion} from './components/Accordion'

function App() {

    const [starCount, setStarCount] = useState<CountStarType>(0)
    const [isOn, setIsOn] = useState<boolean>(false)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    return (<div>
        <PageTitle title="This is APP"/>
        <UncontrolledAccordion titleValue="Menu"/>
        <UncontrolledRating/>
        <Accordion titleValue="Users" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <Rating starCount={starCount} setStarCount={setStarCount}/>
        <OnOff isOn={isOn} setIsOn={setIsOn}/>
    </div>)
}

type TitlePropsType = {
    title: string
}

function PageTitle(props: TitlePropsType) {
    return <h1> {props.title}</h1>
}

export default App
