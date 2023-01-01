import React from 'react'
// import{ useSelector, useDispatch} from "react-redux"
import CounterView from '../components/features/counter/CounterView'
import PostView from '../components/features/posts/postView'
// import { decrementCounter, incrementCounter, resetCounter } from '../components/services/actions/counterAction'
// import { getAllTodos } from '../components/services/actions/todosAction'

const Index = () => {
    // const {isLoading, todos, error} = useSelector((state) => state)
    // console.log(todos)
    // const dispatch = useDispatch()
    // const handleIncrement = () =>{
    //     dispatch(getAllTodos())  
    // }
  return (
    <div >
        {/* <h1>Todos App</h1>
        {
            isLoading ? (
                <h4>Loading...........</h4>
            ): null
        }
        {
            error ? (
                <h4>{error}</h4>
            ): null
        }
        {
            todos.map((item, index)=>(
                <p key={index} >{item.title}</p>
            ))
        }
        <button onClick={handleIncrement}> <h3>Fetch</h3> </button> */}
    

        <CounterView />
        <PostView />
    </div>
  )
}

export default Index