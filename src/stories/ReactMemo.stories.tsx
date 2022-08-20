import React, {useState} from 'react'

export default {
    title: 'React Memo',
}

const Counter = (props: { count: number }) => {
    console.log('COUNTER')
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    console.log('USER')
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}

const UsersMemo = React.memo(Users)

export const WithReactMemo = () => {
    console.log('PARENT')
    const [count, setCount] = useState(0)
    const [users, setUser] = useState<string[]>([
        'Vlad',
        'Vanya',
        'Denis',
    ])

    const incCount = () => {
        setCount(prev => ++prev)
    }
    return <>
        <button onClick={incCount}>+</button>
        <Counter count={count}/>
        <UsersMemo users={users}/>
    </>
}
