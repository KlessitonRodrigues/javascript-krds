import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Components from "./components/index"

const { AsideNav } = Components

const App = () => (
    <Router>
        <div className="app">
            <AsideNav />
            
        </div>
    </Router>
)

export default App