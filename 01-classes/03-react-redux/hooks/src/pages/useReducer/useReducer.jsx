import React, { useReducer } from "react"
import "./useReducer"

const initialState = {
    number: 0,
    street: "ABC",
    city: "ABC",
    country: "ABC"
}

function reduce(state, action) {
    switch (action.type) {
        case "number":
            return { ...state, number: action.number }
            break
        case "street":
            return { ...state, street: action.street }
            break
        case "city":
            return { ...state, city: action.city }
            break
        case "country":
            return { ...state, country: action.country }
            break
        default:
            return state
    }
}

const useReduce = () => {
    const [state, dispatch] = useReducer(reduce, initialState)

    return (
        <div className="page use-reducer">
            <div className="input-address">
                <input type="number" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <div className="btn-group">
                    <button>Number</button>
                    <button>Street</button>
                    <button>City</button>
                    <button>Country</button>
                </div>

            </div>
            <div className="address">
                <span className="number">{state.number}</span>
                <span className="street">{state.street}</span>
                <span className="city">{state.city}</span>
                <span className="country">{state.country}</span>
            </div>
        </div>
    )
}

export default useReduce