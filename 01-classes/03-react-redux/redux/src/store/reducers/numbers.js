const initialState = {
    min: "",
    max: ""
}

function numbersReducer(state = initialState, action) {
    switch (action.type) {
        case "ALTER_MIN":
            return { ...state, min: action.payload }
        case "ALTER_MAX":
            return { ...state, max: action.payload }
        default:
            return state
    }
}

export default numbersReducer
