import { createStore, combineReducers } from "redux"
import numbersReducer from "./reducers/numbers"

const reducers = combineReducers({
    numbers: numbersReducer
})

const storeConfig = () => createStore(reducers)

export default storeConfig