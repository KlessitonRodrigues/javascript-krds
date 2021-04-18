import React from "react"

export default props => (
    <nav className="navbar navbar-inverse">
        <div className="container">
            <div className="navbar-header">
                <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#mainNav">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <span className="fa fa-trash"></span>
            </div>
            <div className="collapse navbar-collapse" id="mainNav">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Todo</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)