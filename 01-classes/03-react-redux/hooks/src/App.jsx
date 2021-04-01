import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Components from "./components/index"
import "./App.css"

const {
    AsideNav,
    Content } = Components

const App = () => (
    <Router>
        <div className="app">
            <AsideNav />
            <Content />
        </div>
    </Router>
)

export default App