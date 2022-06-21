import React, {useState} from 'react'

type CountStarType = 0 | 1 | 2 | 3 | 4 | 5

const arr: CountStarType[] = [1, 2, 3, 4, 5]

function UncontrolledRating() {

    const [value, setValue] = useState<CountStarType>(0)

    return (<div>
        {arr.map(num => <Star key={num} selected={value > num - 1} setValue={() => setValue(num)}/>)}
    </div>)
}

export default UncontrolledRating

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

