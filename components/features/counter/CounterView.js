import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(increment())
    }

  return (
    <div>
        <h1>Counter</h1>
        <h3>Count is : {count} </h3>
        <h4>
            <button onClick={handleClick}>Increment</button>
        </h4>
    </div>
  )
}

export default CounterView