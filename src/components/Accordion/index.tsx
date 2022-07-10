import React, {FC} from 'react'

type AccordionPropsType = {
    titleValue: string
    isCollapsed: boolean
    setIsCollapsed: (value: boolean) => void
}

export const Accordion: FC<AccordionPropsType> = ({titleValue, isCollapsed, setIsCollapsed}) => {

    const onClickTitleHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <AccordionTitle title={titleValue} onClickTitle={onClickTitleHandler}/>
            {isCollapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClickTitle: () => void
}

const AccordionTitle: FC<AccordionTitlePropsType> = ({title, onClickTitle}) => (
    <h3 onClick={onClickTitle} style={{cursor: 'pointer'}}>{title}</h3>
)

const AccordionBody = () => (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
)