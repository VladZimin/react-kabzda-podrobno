import React, {useState} from 'react'

type AccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    return (<div>
        <AccordionTitle title={props.titleValue} onClickTitle={() => setIsCollapsed(!isCollapsed)}/>
        {!isCollapsed && <AccordionBody/>}
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
    return (<h3 onClick={onClickTitleHandler} style={{cursor: 'pointer'}}>{props.title}</h3>)
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}