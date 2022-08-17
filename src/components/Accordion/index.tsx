import React, {FC} from 'react'

type ItemType = {
    id: number,
    name: string
}

type AccordionPropsType = {
    titleValue: string
    isCollapsed: boolean
    setIsCollapsed: (value: boolean) => void
    users: ItemType[]
    onClick: (name: string) => void
}

export const Accordion: FC<AccordionPropsType> = (
    {
        titleValue,
        isCollapsed,
        setIsCollapsed,
        users,
        onClick
    }) => {

    const onClickTitleHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <AccordionTitle title={titleValue} onClickTitle={onClickTitleHandler}/>
            {isCollapsed && <AccordionBody users={users} onClick={onClick}/>}
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

type AccordionBodyProps = {
    users: ItemType[]
    onClick: (name: string) => void
}

const AccordionBody: FC<AccordionBodyProps> = ({users, onClick}) => {

    return (
        <ul>
            {users.map(u => <li key={u.id} onClick={() => onClick(u.name)}>{u.name}</li>)}
        </ul>
    )
}
