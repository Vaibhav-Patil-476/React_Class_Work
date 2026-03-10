import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false)

    function increment() {
        if (count >= 0) {
            setDisabled(false)
        }

        setCount(count + 1)

    };

    function decrement() {
        if (count < 1) {
            setDisabled(true)
        } else {
            setCount(count - 1)
        }
    };

    return (
        <>
        <div className='container text-center mt-5 pt-5'>

            <h1>Counter Task</h1>
            <button onClick={increment} className='btn btn-primary'>+</button>

            <h1>{count}</h1>

            <button disabled={disabled} onClick={decrement} className='btn btn-primary'>-</button>
        </div>
        </>
    )
}

export default Counter;
