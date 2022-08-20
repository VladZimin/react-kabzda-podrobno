import React, {useReducer} from 'react'
import {reducer} from './reducer'

type AccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {isCollapsed: true})

    return (<div>
        <AccordionTitle title={props.titleValue} onClickTitle={() => dispatch({type: 'TOGGLE_COLLAPSED'})}/>
        {!state.isCollapsed && <AccordionBody/>}
    </div>)
}

export default UncontrolledAccordion

type AccordionTitlePropsType = {
    title: string
    onClickTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickTitleHandler = () => {
        props.onClickTitle()
    }
    return (<h3 onClick={onClickTitleHandler}>{props.title}</h3>)
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}