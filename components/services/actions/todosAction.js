import axios from "axios"

import { TODOS_ERROR, TODOS_GET_REQUEST, TODOS_SUCCESS } from "../constants/todosConstants"

const getAllTodos = () => async(dispatch)=>{
    try{
        dispatch({type: TODOS_GET_REQUEST})
        const res = await axios("https://jsonplaceholder.typicode.com/todos");
        dispatch({type: TODOS_SUCCESS, payload: res.data})

    }catch(error){
        dispatch({type: TODOS_ERROR, payload: error.message})
    }
}

export{
    getAllTodos
}