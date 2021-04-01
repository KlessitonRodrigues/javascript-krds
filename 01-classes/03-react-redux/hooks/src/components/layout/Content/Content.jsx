import React from "react"
import { Switch, Route } from "react-router-dom"
import Pages from "../../../pages/index"

const {
    Home,
    UseState } = Pages

const Content = () => (
    <Switch>
        <Route path="/use-state">
            <UseState />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
    </Switch>
)

export default Content