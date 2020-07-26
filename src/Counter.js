import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            {count} <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter