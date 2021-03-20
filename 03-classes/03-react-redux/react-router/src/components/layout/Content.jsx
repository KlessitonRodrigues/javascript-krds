import React from "react"
import { Switch, Route } from "react-router-dom"
import Pages from "../../views/index"

const { Home, About, Clock, Date } = Pages

const Content = () => (
    <Switch>
        <Route path="/about">
            <About />
        </Route>

        <Route path="/clock">
            <Clock />
        </Route>

        <Route path="/date">
            <Date />
        </Route>

        <Route exact path="/">
            <Home />
        </Route>
    </Switch>
)

export default Content