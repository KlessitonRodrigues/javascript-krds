import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import { reducer as toastrReducer } from "react-redux-toastr"

import dashboardReducer from "../dashboard/dashboardReducer"
import tabReducer from "../common/tab/tabReducer"
import billingCycleReducer from "../billingCycles/billingCyclesReducer"

export default combineReducers({
    dashboard: dashboardReducer,
    tabs: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})