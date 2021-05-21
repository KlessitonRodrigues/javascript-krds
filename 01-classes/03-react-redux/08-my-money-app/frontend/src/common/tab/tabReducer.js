const INITIAL_STATE = "tabList"

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TAB_SELECTED":
            return action.payload
        default:
            return state
    }
}