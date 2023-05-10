import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect demo',
}

export const SetTimeoutUseEffect = () => {
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    useEffect(() => {
        console.log('UseEffect EveryTime')
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    })

    useEffect(() => {
        console.log('UseEffect One Time')
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [])

    useEffect(() => {
        console.log('UseEffect with deps')
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <span>{counter}|||{fake}</span>
    </>
}

export const SetIntervalUseEffect = () => {
    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        console.log('UseEffect One Time')
        setInterval(() => {
            setCounter(prevState => prevState + 1)
        }, 1000)
    }, [])

    return <>
        <span>Second: {counter}</span>
    </>
}
