import { createStore } from "redux";
import { todosReducer } from "./reducers/todosReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"


const store = createStore(todosReducer, applyMiddleware(thunk))

export default store;