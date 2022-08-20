import React, {useMemo, useState} from 'react'
import {Select, UserType} from '../components/Select'

export default {
    title: 'React Memo',
}

const Counter = (props: { count: number }) => {
    console.log('COUNTER')
    return <div>{props.count}</div>
}

export const SelectUseMemo = () => {
    console.log('PARENT')
    const [count, setCount] = useState(0)
    const [userId, setUserID] = useState(0)
    const [users, setUsers] = useState<UserType[]>([
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Urma'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Erlan'},
        {id: 7, name: 'Denis'},
    ])

    const incCount = () => {
        setCount(prev => ++prev)
    }
    const addUser = () => {
        setUsers([...users, {id: Math.random(), name: 'Ermek'}])
    }

    const usersWithA = useMemo(() => {
        return users.filter(u => u.name.toLowerCase().indexOf('a') > -1)
    }, [users])
    const usersWithD = useMemo(() => {
        return users.filter(u => u.name.toLowerCase().indexOf('d') > -1)
    }, [users])
    const usersWithE = useMemo(() => {
        return users.filter(u => u.name.toLowerCase().indexOf('e') > -1)
    }, [users])

    return <>
        <button onClick={incCount}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={count}/>
        <Select users={usersWithA} id={userId} onChange={setUserID}/>
        <Select users={usersWithD} id={userId} onChange={setUserID}/>
        <Select users={usersWithE} id={userId} onChange={setUserID}/>
    </>
}
