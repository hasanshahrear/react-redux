import React from 'react'
import{ useSelector, useDispatch} from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from '../components/services/actions/counterAction'

const test = () => {
    const count = useSelector((state) => state.count)

  return (
    <div >
        <h1>React Redux Counter</h1>
        <h2>Count is : {count}</h2>
       
    </div>
  )
}

export default test