import { createStore, combineReducers } from "redux"

const reducers = combineReducers({
    numbers = function (state, action) {
        return {
            min: 1,
            max: 10
        }
    }
})