import React from 'react'
import useCounter from "../Hooks/UseCounter"

function Counter() {
    const { count, Increment, Decrement, Reset, setCount } = useCounter(0)
    return (
        <div className="Counter">
            <h1>Count: {count}</h1>
            <button onClick={() => Increment()}>Increment</button>
            <button onClick={() => Decrement()}>Decrement</button>
            <button onClick={() => Reset()}>Reset</button>
        </div>
    )
}

export default Counter
