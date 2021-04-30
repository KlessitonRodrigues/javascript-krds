import React from "react"

export default props => (
    <nav className="navbar navbar-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="#/todo" className="navbar-brand">
                    <i className="fa fa-calendar-check-o" />
                    <b> TodoApp</b>
                </a>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <a href="#/todo">Todo</a>
                </li>
                <li>
                    <a href="#/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)