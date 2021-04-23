import { ALTER_MIN, ALTER_MAX } from "./actionTypes"

// ACTIONS CREATORS
export function alterMin(min) {
    return {
        type: ALTER_MIN,
        payload: min
    }
}

export function alterMax(max) {
    return {
        type: ALTER_MAX,
        payload: max
    }
}