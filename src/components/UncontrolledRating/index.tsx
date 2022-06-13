import React, { useState } from 'react'


type CountStarType = 0 | 1 | 2 | 3 | 4 | 5

const arr: CountStarType[] = [1, 2, 3, 4, 5]

function UncontrolledRating() {

    const [value, setValue] = useState<CountStarType>(0)

    return (<div>
        {arr.map(num => <Star key={num} selected={value > num - 1} setValue={setValue} starId={num} />)}
    </div>)
}

export default UncontrolledRating

type StarPropsType = {
    selected: boolean
    starId: CountStarType
    setValue: (value: CountStarType) => void
}

function Star(props: StarPropsType) {

    const starStyle = { cursor: 'pointer', fontSize: '30px' }

    const onClickStarHandler = () => {
        props.setValue(props.starId)
    }

    return props.selected ? <span onClick={onClickStarHandler} style={starStyle}>&#9733;</span> :
        <span onClick={onClickStarHandler} style={starStyle}>&#9734;</span>

}

