const INITIAL_STATE = { currentTab: "", hidden: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TAB_SELECTED":
            return { ...state, currentTab: action.payload }
        case "TAB_SHOWED":
            return {
                ...state, hidden:
                {
                    ...state.hidden,
                    ...action.payload
                }
            }
        default:
            return state
    }
}