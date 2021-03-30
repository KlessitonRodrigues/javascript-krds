import React from "react"
import "./app.css"
import Components from "../../components/index"
import { BrowserRouter as Router, Link } from "react-router-dom"

const { Content } = Components

const App = () => {
    return (
        <div className="app">
            <Router>
                <aside>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/clock">Clock</Link>
                        </li>
                        <li>
                            <Link to="/date">Date</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </aside>
                <div>
                    <Content />
                </div>
            </Router>
        </div>
    )
}

export default App