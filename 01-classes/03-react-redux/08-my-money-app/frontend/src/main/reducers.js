import { combineReducers } from "redux"
import dashboardReducer from "../dashboard/dashboardReducer.js"
import tabReducer from "../common/tab/tabReducer"

export default combineReducers({
    dashboard: dashboardReducer,
    selectedTab: tabReducer
})