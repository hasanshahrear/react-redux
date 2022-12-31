import { TODOS_ERROR, TODOS_GET_REQUEST, TODOS_SUCCESS } from "../constants/todosConstants";

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case TODOS_GET_REQUEST:
           return{
            ...state,
            isLoading: true,

           }
        case TODOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload,
                error: null
                
            }
        case TODOS_ERROR:
            return{
                ...state,
                isLoading: false,
                todos: [],
                error: action.payload
                
            }
    
        default:
            return state
    }
}

export{
    todosReducer
}