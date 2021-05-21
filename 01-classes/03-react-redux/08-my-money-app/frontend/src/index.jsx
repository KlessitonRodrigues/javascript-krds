import ReactDOM from "react-dom"
import React from "react"
import { createStore, applyMiddleware } from "redux"
import reduxPromise from "redux-promise"
import { Provider } from "react-redux"
import App from "./main/app"
import reducers from "./main/reducers.js"

const store = applyMiddleware(reduxPromise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)