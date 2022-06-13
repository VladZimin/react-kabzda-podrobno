import React, { useState } from 'react'


type AccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    return (<div>
        <AccordionTitle title={props.titleValue} isCollapsed={isCollapsed}
                        onClickTitle={(isCollapsed: boolean) => setIsCollapsed(isCollapsed)} />
        {!isCollapsed && <AccordionBody />}
    </div>)
}

export default UncontrolledAccordion

type AccordionTitlePropsType = {
    title: string
    isCollapsed: boolean
    onClickTitle: (isCollapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickTitleHandler = () => {
        props.onClickTitle(!props.isCollapsed)
    }
    return (<h3 onClick={onClickTitleHandler} style={{ cursor: 'pointer' }}>{props.title}</h3>)
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}