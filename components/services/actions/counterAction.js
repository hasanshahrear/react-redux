import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants"

const incrementCounter = () => {
    return{
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return{
        type: DECREMENT
    }
}
const resettCounter = () => {
    return{
        type: RESET
    }
}

export {
    incrementCounter,
    decrementCounter,
    resettCounter as resetCounter
}