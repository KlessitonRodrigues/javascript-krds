import ReactDOM from "react-dom"
import React from "react"
import { createStore, applyMiddleware } from "redux"
import reduxPromise from "redux-promise"
import reduxMulti from "redux-multi"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import App from "./main/app"
import reducers from "./main/reducers.js"

const store = applyMiddleware(
    reduxThunk,
    reduxMulti,
    reduxPromise
)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)