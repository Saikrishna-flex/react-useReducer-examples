import React, { useReducer, useState } from 'react'
import { COUNTER_ACTION_TYPES } from '../reducer/counter/counterActionTypes'
import { counterInitialValue, counterReducer } from '../reducer/counter/counterReducer'

const Counter = () => {
    // with useState
    // const initialValue = 0
    // const [counter, setCounter] = useState(initialValue);

    // with useReducer
    const [state, dispatch] = useReducer(counterReducer, counterInitialValue)

  return (
    <div>
        <div>{state.count}</div>
        <button onClick={() => dispatch({type: COUNTER_ACTION_TYPES.INCREMENT})}>Increment</button>
        <button onClick={() => dispatch({type: COUNTER_ACTION_TYPES.DECREMENT})}>Decrement</button>
        <button onClick={() => dispatch({type: COUNTER_ACTION_TYPES.RESET})}>Reset</button>
    </div>
  )
}

export default Counter