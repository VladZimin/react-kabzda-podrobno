import React, {FC} from 'react'

export type CountStarType = 0 | 1 | 2 | 3 | 4 | 5

const arr: CountStarType[] = [1, 2, 3, 4, 5]

type RatingPropsType = {
    starCount: CountStarType
    setStarCount: (value: CountStarType) => void
}

export const Rating: FC<RatingPropsType> = ({starCount, setStarCount}) => {

    return (
        <div>
            {arr.map(num => <Star key={num} selected={starCount > num - 1} setValue={() => setStarCount(num)}/>)}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    const starStyle = {cursor: 'pointer', fontSize: '30px'}

    const onClickStarHandler = () => {
        props.setValue()
    }

    return <span onClick={onClickStarHandler} style={starStyle}> {props.selected ? <>&#9733;</> : <>&#9734;</>}</span>

}

