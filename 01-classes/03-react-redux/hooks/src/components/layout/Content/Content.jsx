import React from "react"
import { Switch, Route } from "react-router-dom"
import Pages from "../../../pages/index"

const {
    Home,
    UseState,
    UseEffect,
    UseRef,
    UseMemo,
    UseCallback,
    UseContext,
    UseReducer } = Pages

const Content = () => (
    <Switch>
        <Route path="/use-state"> <UseState /> </Route>
        <Route path="/use-effect"> <UseEffect /> </Route>
        <Route path="/use-ref"> <UseRef /> </Route>
        <Route path="/use-memo"> <UseMemo /> </Route>
        <Route path="/use-callback"> < UseCallback /> </Route>
        <Route path="/use-context"> < UseContext /> </Route>
        <Route path="/use-reducer"> < UseReducer /> </Route>
        <Route path="/"> <Home /> </Route>
    </Switch>
)

export default Content