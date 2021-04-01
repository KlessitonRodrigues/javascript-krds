import React from "react"
import { Switch, Route } from "react-router-dom"
import Pages from "../../../pages/index"

const { UseState } = Pages

const Content = () => (
    <Switch>
        <Route path="/use-state">
            <UseState />
        </Route>
    </Switch>
)

export default Content