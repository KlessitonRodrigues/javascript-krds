import React from "react"
import { Switch, Route} from "react-router-dom"

import HomePage from "./home"
import LoginFocus from "./loginFocus"
import SearchAcount from "./searchAcount"

export default () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginFocus} />
        <Route exact path="/login/identify" component={SearchAcount} />
    </Switch>
)