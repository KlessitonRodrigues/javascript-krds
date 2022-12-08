import React, { useReducer, useRef } from "react"
import "./useReducer.css"

const initialState = {
    number: null,
    street: "",
    city: "",
    country: ""
}

function reduce(state, action) {
    switch (action.type) {
        case "number":
            return { ...state, number: action.payload }
        case "street":
            return { ...state, street: action.payload }
        case "city":
            return { ...state, city: action.payload }
        case "country":
            return { ...state, country: action.payload }
        default:
            return state
    }
}

const useReduce = () => {
    const [state, dispatch] = useReducer(reduce, initialState)
    const numberIptRef = useRef(null)
    const streetIptRef = useRef(null)
    const cityIptRef = useRef(null)
    const countryIptRef = useRef(null)

    const saveBtnsClick = (type, iptRef) => dispatch(
        {
            type,
            payload: iptRef.current.value
        }
    )

    return (
        <div className="page use-reducer">
            <h2>UseReducer(reduceFn, initState)</h2>

            <input
                type="number"
                placeholder="number"
                ref={numberIptRef} />
            <input
                type="text"
                placeholder="street"
                ref={streetIptRef} />
            <input
                type="text"
                placeholder="city"
                ref={cityIptRef} />
            <input
                type="text"
                placeholder="country"
                ref={countryIptRef} />

            <div className="btn-group">
                <button onClick={() =>
                    saveBtnsClick("number", numberIptRef)}
                >Number</button>

                <button onClick={() =>
                    saveBtnsClick("street", streetIptRef)}
                >Street</button>

                <button onClick={() =>
                    saveBtnsClick("city", cityIptRef)}
                >City</button>

                <button onClick={() =>
                    saveBtnsClick("country", countryIptRef)}
                >Country</button>
            </div>

            <div className="address">
                <div>
                    Number <hr />
                    {state.number}
                </div>
                <div>
                    Street <hr />
                    {state.street}
                </div>

                <div>
                    City <hr />
                    {state.city}
                </div>
                <div>
                    Country <hr />
                    {state.country}
                </div>
            </div>
        </div>
    )
}

export default useReduce