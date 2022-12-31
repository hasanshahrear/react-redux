import React from 'react'
import{ useSelector, useDispatch} from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from '../components/services/actions/counterAction'

const index = () => {
    const count = useSelector((state) => state.count)
    // console.log(count)
    const dispatch = useDispatch()
    const handleIncrement = () =>{
        dispatch(incrementCounter())  
    }
    const handlederement = () =>{
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
  return (
    <div >
        <h1>React Redux Counter</h1>
        <h2>Count is : {count}</h2>
        <button onClick={handleIncrement}> <h3>Increment</h3> </button>
        <button onClick={handlederement}> <h3>Decrement</h3> </button>
        <button onClick={handleReset}> <h3>Reset</h3> </button>
    </div>
  )
}

export default index