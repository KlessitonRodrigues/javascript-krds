import React from "react"
import { Switch, Route } from "react-router-dom"
import Pages from "../../../pages/index"

const {
    Home,
    UseState,
    UseEffect } = Pages

const Content = () => (
    <Switch>
        <Route path="/use-state">
            <UseState />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/use-effect">
            <UseEffect />
        </Route>
    </Switch>
)

export default Content