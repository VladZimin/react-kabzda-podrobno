import React from 'react'
import './App.css'
import { OnOff } from './components/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion'
import UncontrolledRating from './components/UncontrolledRating'


function App() {

    return (<div>
        <PageTitle title='This is APP' />
        <UncontrolledAccordion titleValue='Menu' />
        {/*<Rating value={3}/>*/}
        <UncontrolledRating />
        <UncontrolledAccordion titleValue='Users' />
        <UncontrolledRating />
        <OnOff />
    </div>)
}

type TitlePropsType = {
    title: string
}

function PageTitle(props: TitlePropsType) {
    return <h1> {props.title}</h1>
}

export default App
